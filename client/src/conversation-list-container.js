import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Alert } from 'shards-react'
import ConversationListItem from './conversation-list-item'
import ConversationSelectableListItem from './conversation-selectable-list-item'

const ConversationListContainer = ({
  conversation,
  setConversation,
  currentUserID
}) => {
  return (
    <Query
      query={gql`
        query ListUsers {
          users {
            id
            name
            avatar
            status
            createdAt
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <Alert theme="primary">Loading Chats</Alert>
        }

        if (error) {
          return <Alert theme="danger">Error loading chats</Alert>
        }
        const currentUser = data.users.find(user => user.id === currentUserID)
        const availableUsers = data.users.filter(
          user => user.id !== currentUserID
        )

        if (!conversation) {
          setConversation(availableUsers[0].id)
        }

        return (
          <div style={{ overflow: 'scroll', maxHeight: '100vh' }}>
            <h1 style={{ fontSize: 21, padding: '0 8px', textAlign: 'center' }}>
              CometChat Messenger
            </h1>
            <>
              <ConversationListItem chat={currentUser} isCurrentUser />
              {availableUsers.map(user => (
                <ConversationSelectableListItem
                  chat={user}
                  selected={conversation === user.id}
                  setConversation={setConversation}
                  key={user.id}
                />
              ))}
            </>
          </div>
        )
      }}
    </Query>
  )
}

export default ConversationListContainer
