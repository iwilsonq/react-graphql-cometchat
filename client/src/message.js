import React from 'react'

const Message = ({ message, currentUserID }) => {
  const isCurrentUserMessage = message.sender.uid === currentUserID
  return (
    <div
      style={{
        alignSelf: isCurrentUserMessage ? 'flex-end' : 'flex-start',
        backgroundColor: isCurrentUserMessage
          ? 'rgb(102, 153, 204)'
          : '#f1f0f0',
        borderRadius: 4,
        color: isCurrentUserMessage ? '#fff' : '#000',
        padding: '6px 12px 7px',
        maxWidth: '85%',
        marginBottom: 2
      }}
    >
      <span>{message.text}</span>
    </div>
  )
}

export default Message
