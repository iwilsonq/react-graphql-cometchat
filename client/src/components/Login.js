import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [name, setName] = React.useState('')
  const { login } = useAuth()
  const handleLogin = ({ data }) => {
    login(data.loginUser.authToken)
  }

  return (
    <div className="container mx-auto mt-32">
      <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl text-center mb-2">CometChat Login</h1>
          <Mutation
            mutation={gql`
              mutation LoginUser($input: CreateUserInput!) {
                loginUser(input: $input) {
                  id
                  authToken
                  createdAt
                }
              }
            `}
          >
            {(loginUser, { loading }) => {
              return (
                <>
                  <form
                    onSubmit={event => {
                      event.preventDefault()
                      loginUser({ variables: { input: { name } } }).then(
                        handleLogin
                      )
                    }}
                  >
                    <div className="mb-4 py-4">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={event => setName(event.target.value)}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        disabled={loading}
                        className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                      >
                        {loading ? 'Logging in...' : 'Login'}
                      </button>
                    </div>
                  </form>
                </>
              )
            }}
          </Mutation>
        </div>
      </div>
    </div>
  )
}

export default Login
