import React from 'react'
import Message from './message'

const MessageContainer = props => {
  return (
    <div className="border border-grey-lighter h-full flex flex-col justify-between">
      <h1 className="text-xl px-8 py-4">Conversation</h1>
      <div className="h-full px-8 py-4">
        <div className="flex flex-col justify-end h-full">
          {props.messageList.map(message => {
            return (
              <Message
                key={message.id}
                currentUserID={props.currentUserID}
                message={message}
              />
            )
          })}
        </div>
      </div>
      <form
        className="border border-grey-lighter flex flex-row"
        onSubmit={props.onSubmit}
      >
        <input
          className="flex flex-1 p-4"
          placeholder="Type a message..."
          value={props.messageInput}
          onChange={event => {
            props.setMessageInput(event.target.value)
          }}
        />
        <button className="bg-blue hover:bg-blue-dark text-white font-bold my-2 mr-2 py-2 px-4 rounded">
          Send
        </button>
      </form>
    </div>
  )
}

export default MessageContainer
