import React from 'react'
import { CometChat } from '@cometchat-pro/chat'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const [auth, setAuth] = React.useState(false)
  const [currentUserID, setCurrentUserID] = React.useState()
  const authToken = localStorage.getItem('authToken')
  if (!auth && authToken) {
    setAuth(true)
    setCurrentUserID(authToken.split('_')[0])
  }

  const login = authToken => {
    console.log('LOGIN', authToken)
    CometChat.login(authToken).then(
      user => {
        localStorage.setItem('authToken', user.authToken)
        setAuth(true)
        setCurrentUserID(user.authToken.split('_')[0])
      },
      error => {
        console.log('Login failed with exception:', { error })
      }
    )
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setAuth(false)
    setCurrentUserID(null)
  }

  return (
    <AuthContext.Provider
      value={{ auth, currentUserID, login, logout }}
      {...props}
    />
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
