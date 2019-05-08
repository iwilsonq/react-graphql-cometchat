import React from 'react'
import { Container, Row, Col } from 'shards-react'
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
    <Container fluid style={{ height: '100vh', padding: 0 }}>
      <Row noGutters style={{ height: '100%' }}>
        <Col sm="4" lg="3">
          <ConversationListContainer
            currentUserID={currentUserID}
            conversation={conversation}
            setConversation={setConversation}
          />
        </Col>
        <Col sm="8" lg="9">
          <MessageContainer
            currentUserID={currentUserID}
            messageInput={messageInput}
            messageList={messageList}
            setMessageInput={setMessageInput}
            onSubmit={handleSubmitMessage}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Messenger
