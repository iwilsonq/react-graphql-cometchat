import React from 'react'
import ConversationListItem from './ConversationListItem'

const ConversationSelectableListItem = ({
  chat,
  selected = false,
  setConversation
}) => {
  const backgroundColor = selected ? 'bg-grey-lighter' : 'bg-white'
  return (
    <div className={backgroundColor}>
      <a
        href="#"
        className="no-underline text-black"
        onClick={event => {
          event.preventDefault()
          setConversation(chat.id)
        }}
      >
        <ConversationListItem chat={chat} />
      </a>
    </div>
  )
}

export default ConversationSelectableListItem
