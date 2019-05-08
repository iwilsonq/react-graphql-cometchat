import React from 'react'

const Message = ({ message, currentUserID }) => {
  const isCurrentUserMessage = message.sender.uid === currentUserID
  const bg = isCurrentUserMessage ? 'bg-blue-light' : 'bg-grey-lighter'
  const color = isCurrentUserMessage ? 'text-white' : 'text-black'
  const alignSelf = isCurrentUserMessage ? 'self-end' : 'self-start'
  return (
    <div
      className={`px-4 py-2 mb-2 rounded ${bg} ${color} ${alignSelf}`}
    >
      <span>{message.text}</span>
    </div>
  )
}

export default Message
