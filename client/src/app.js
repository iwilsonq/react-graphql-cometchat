import React from 'react'
import { Router, Redirect } from '@reach/router'
import Login from './login'
import Messenger from './messenger'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return localStorage.getItem('authToken') ? (
    <Component {...rest} />
  ) : (
    <Redirect noThrow from={rest.path} to="/login" />
  )
}

const App = () => {
  return (
    <Router>
      <ProtectedRoute path="/" component={Messenger} />
      <Login path="/login" />
      <Redirect noThrow from="/" to="/login" />
    </Router>
  )
}

export default App
