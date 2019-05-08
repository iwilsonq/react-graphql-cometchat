import React from 'react'
import { Button, Form, FormInput } from 'shards-react'
import Message from './message'

const MessageContainer = props => {
  return (
    <div
      style={{
        borderLeft: '1px solid rgba(0,0,0, .20)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <h1 style={{ fontSize: 21, padding: '0 8px 8px 8px' }}>Conversation</h1>
      <div style={{ height: '100%', padding: '0 8px 8px 8px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%'
          }}
        >
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
      <Form
        inline
        style={{ border: '1px solid rgba(0,0,0, .10)' }}
        onSubmit={props.onSubmit}
      >
        <FormInput
          placeholder="Type a message..."
          size="lg"
          style={{ flex: 1, border: 0, borderRadius: 0 }}
          value={props.messageInput}
          onChange={event => {
            props.setMessageInput(event.target.value)
          }}
        />
        <Button outline>Send</Button>
      </Form>
    </div>
  )
}

export default MessageContainer
