import React from 'react'

const ConversationListItem = ({
  chat: { name, avatar },
  isCurrentUser = false
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 8,
      color: isCurrentUser ? '#000' : 'inherit',
      fontWeight: 'bold',
      borderBottom: isCurrentUser ? '1px solid rgba(0,0,0,0.15)' : 'none'
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        alt={name + ' picture'}
        src={avatar || 'http://placekitten.com/200/200'}
        style={{
          borderRadius: '50%',
          height: 50,
          width: 50,
          marginRight: 16
        }}
      />
      <div>
        <span>{name}</span>
      </div>
    </div>
  </div>
)

export default ConversationListItem
