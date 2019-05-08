import React from 'react'
import ConversationListItem from './conversation-list-item'

const ConversationSelectableListItem = ({
  chat,
  selected = false,
  setConversation
}) => (
  <div
    style={{
      backgroundColor: selected ? 'rgba(0,0,0,0.05)' : '#fff',
      cursor: 'pointer'
    }}
    onClick={() => {
      setConversation(chat.id)
    }}
  >
    <ConversationListItem chat={chat} />
  </div>
)

export default ConversationSelectableListItem
