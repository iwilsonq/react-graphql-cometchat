import React from 'react'
import { CometChat } from '@cometchat-pro/chat'
import ConversationListContainer from './conversation-list-container'
import MessageContainer from './message-container'

const Messenger = () => {
  const [messageInput, setMessageInput] = React.useState('')
  const [messageList, setMessageList] = React.useState([])
  const [conversation, setConversation] = React.useState('')

  const [currentUserID] = localStorage.getItem('authToken').split('_')

  React.useEffect(() => {
    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setUID(conversation)
      .setLimit(30)
      .build()
    messagesRequest.fetchPrevious().then(
      messages => setMessageList(messages),
      error => {
        console.log('Message fetching failed with error:', error)
      }
    )
  }, [conversation])

  React.useEffect(() => {
    CometChat.addMessageListener(
      conversation,
      new CometChat.MessageListener({
        onTextMessageReceived: message => {
          console.log('MESSAGE: ', message)
          messageList.push(message)
          setMessageList(messageList)
        }
      })
    )
    return CometChat.removeMessageListener(conversation)
  }, [conversation, messageList])

  const handleSubmitMessage = event => {
    event.preventDefault()
    const textMessage = new CometChat.TextMessage(
      conversation,
      messageInput,
      CometChat.MESSAGE_TYPE.TEXT,
      CometChat.RECEIVER_TYPE.USER
    )

    CometChat.sendMessage(textMessage).then(
      message => {
        console.log('Message sent successfully:', message)
        messageList.push(message)
        setMessageList(messageList)
      },
      error => {
        console.log('Message sending failed with error:', error)
      }
    )
    setMessageInput('')
  }

  return (
    <div className="container h-screen mx-auto">
      <div className="h-full flex flex-row">
        <div className="w-1/4">
          <ConversationListContainer
            currentUserID={currentUserID}
            conversation={conversation}
            setConversation={setConversation}
          />
        </div>
        <div className="w-3/4">
          <MessageContainer
            currentUserID={currentUserID}
            messageInput={messageInput}
            messageList={messageList}
            setMessageInput={setMessageInput}
            onSubmit={handleSubmitMessage}
          />
        </div>
      </div>
    </div>
  )
}

export default Messenger
