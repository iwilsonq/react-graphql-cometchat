const { ApolloServer, gql } = require('apollo-server')
const { loginUser, listUsers } = require('./comet-chat')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    avatar: String
    status: String
    role: String
    createdAt: Float
  }

  type AuthToken {
    id: ID!
    authToken: String!
    createdAt: Float!
  }

  type Query {
    users: [User]
  }

  input CreateUserInput {
    name: String!
    email: String
    avatar: String
    link: String
    role: String
  }

  type Mutation {
    loginUser(input: CreateUserInput!): AuthToken!
  }
`

const resolvers = {
  Query: {
    users: () => listUsers()
  },
  Mutation: {
    loginUser: (_ctx, { input }) => loginUser(input)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  formatError: error => {
    delete error.extensions.exception
    return error
  }
})

server.listen(4000, () => {
  console.log('Listening at http://localhost:4000')
})
