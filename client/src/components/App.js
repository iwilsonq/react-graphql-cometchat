import React from 'react'
import Login from './Login'
import Messenger from './Messenger'
import { useAuth } from '../context/AuthContext'

const App = () => {
  const { auth } = useAuth()
  return auth ? <Messenger /> : <Login />
}

export default App
