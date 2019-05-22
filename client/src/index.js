import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { CometChat } from '@cometchat-pro/chat'
import App from './components/App'
import config from './config'
import './output.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

CometChat.init(config.appID)

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
