const axios = require('axios')
const uuidv4 = require('uuid/v4')

const apiKey = '168c86a47dfea15b87e5f6a042622634c5e9e392'
const appID = '24803d93367710'

const baseURL = 'https://api.cometchat.com/v1'

const cometChatApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    appid: appID, //'{appID}'
    apikey: apiKey //'{apiKey}'
  }
})

/* loginUser calls two APIs from CometChat, returning the generated token
 * 1. POST /users to create a user
 * 2. POST /users/:uid/auth_tokens to create an auth token
 */
exports.loginUser = data => {
  console.log('loginUser', data)
  return new Promise(resolve => {
    createUser(data).then(user => {
      createAuthToken(user.uid).then(authToken => {
        resolve({
          ...authToken,
          id: authToken.uid
        })
      })
    })
  })
}

const createUser = data => {
  // generate unique id to identify user
  const uid = uuidv4()

  // create a user in the CometChat backend
  return cometChatApi
    .post('/users', { ...data, uid })
    .then(res => res.data.data)
    .catch(err => {
      throw new Error('Error creating user: ', err)
    })
}

const createAuthToken = uid => {
  return cometChatApi
    .post(`/users/${uid}/auth_tokens`)
    .then(res => res.data.data)
    .catch(err => {
      throw new Error('Error creating auth token: ', err)
    })
}

exports.listUsers = () => {
  return cometChatApi
    .get('/users')
    .then(res => {
      const users = res.data.data
      return users.map(user => ({ ...user, id: user.uid }))
    })
    .catch(err => {
      throw err
    })
}
