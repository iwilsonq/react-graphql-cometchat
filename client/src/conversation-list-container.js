import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
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
          return <div>Loading Chats...</div>
        }

        if (error) {
          return <div>Error loading chats</div>
        }
        const currentUser = data.users.find(user => user.id === currentUserID)
        const availableUsers = data.users.filter(
          user => user.id !== currentUserID
        )

        if (!conversation) {
          setConversation(availableUsers[0].id)
        }

        return (
          <div className="overflow-scroll max-h-screen">
            <h1 className="p-4 text-xl text-center">CometChat Messenger</h1>
            <>
              {currentUser && <ConversationListItem chat={currentUser} isCurrentUser />}
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
