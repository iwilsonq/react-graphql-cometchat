import React from 'react'

const ConversationListItem = ({
  chat: { name, avatar },
  isCurrentUser = false
}) => {
  const color = isCurrentUser ? 'text-black' : ''
  return (
    <div
      className={`flex justify-between px-4 py-2 font-bold border border-grey-light ${color}`}
    >
      <div className="flex items-center">
        <img
          alt={name + ' picture'}
          src={avatar || 'http://placekitten.com/200/200'}
          className="h-12 w-12 mr-16 rounded-full"
        />
        <div>
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default ConversationListItem
