import React from 'react'
import {
  Container,
  Row,
  Button,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormInput
} from 'shards-react'
import { Redirect, navigate } from '@reach/router'
import { CometChat } from '@cometchat-pro/chat'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const Login = () => {
  const [name, setName] = React.useState('')
  const handleLogin = ({ data }) => {
    const { authToken } = data.loginUser
    CometChat.login(authToken).then(
      user => {
        localStorage.setItem('authToken', user.authToken)
        navigate('/')
      },
      error => {
        console.log('Login failed with exception:', { error })
      }
    )
  }
  if (localStorage.getItem('authToken')) {
    return <Redirect noThrow from="/login" to="/" />
  }
  return (
    <Container>
      <Row>
        <Col sm="4" />
        <Col sm="4">
          <Card style={{ marginTop: 64 }}>
            <Mutation
              mutation={gql`
                mutation LoginUser($input: CreateUserInput!) {
                  loginUser(input: $input) {
                    id
                    authToken
                    createdAt
                  }
                }
              `}
            >
              {(loginUser, { loading }) => {
                return (
                  <>
                    <CardTitle style={{ paddingTop: 24, textAlign: 'center' }}>
                      CometChat Login
                    </CardTitle>
                    <CardBody>
                      <Form
                        onSubmit={event => {
                          event.preventDefault()
                          loginUser({ variables: { input: { name } } }).then(
                            handleLogin
                          )
                        }}
                      >
                        <FormInput
                          value={name}
                          onChange={event => setName(event.target.value)}
                        />
                      </Form>
                    </CardBody>
                    <CardFooter style={{ textAlign: 'center' }}>
                      <Button
                        block
                        disabled={loading}
                        onClick={() => {
                          loginUser({ variables: { input: { name } } }).then(
                            handleLogin
                          )
                        }}
                      >
                        {loading ? 'Logging in...' : 'Login'}
                      </Button>
                    </CardFooter>
                  </>
                )
              }}
            </Mutation>
          </Card>
        </Col>
        <Col sm="4" />
      </Row>
    </Container>
  )
}

export default Login
