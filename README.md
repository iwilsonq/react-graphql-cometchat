# React Chat App with GraphQL

Read the full tutorial here:

> > Build a React Chat App with GraphQL

This example shows how to build an messenger with React and GraphQL:

<SCREENSHOT - PLEASE ENSURE SCREENSHOTS LIVE IN A /screenshots FOLDER>

## Technology

This demo uses:

- [React](https://reactjs.org)
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [tailwindcss](https://tailwindcss.com)
- [Apollo GraphQL Server](https://www.apollographql.com/docs/apollo-server/) + [Client](https://www.apollographql.com/docs/react/)
- [CometChat Pro](https://cometchat.com/pro?utm_source=github&utm_medium=example-code-readme)

## Running the demo

To run the demo follow these steps:

### Create your API keys

- Head to CometChat Pro and create an account
- From the dashboard, create a new app called "React GraphQL Messenger"
- When created, click Explore
- Go to the API Keys tab and click Create API Key
- Create an API key called "React GraphQL Messenger Key" with Full Access

### Run the source code

- Download the repository here or by running git clone https://github.com/iwilsonq/react-graphql-cometchat.git and open it in your text editor of choice
- Update `index.js` and `client/src/config.js` with your newly created appID and apiKey
- Run the following commands in two separate tabs

```sh
# in project root directory
npm install && npm start

# in client/ directory
npm install && npm start
```

You should now have a GraphQL server running at http://localhost:4000 and a React app dev server at http://localhost:3000.

Questions about running the demo? [Open an issue](https://github.com/iwilsonq/react-graphql-cometchat.git). We're here to help ✌️

## Useful links

- [🏠 CometChat Homepage](https://cometchat.com/pro?utm_source=github&utm_medium=example-code-readme)
- [🚀 Create your free account](https://app.cometchat.com/?utm_source=github&utm_medium=example-code-readme)
- [📚 Documentation](https://prodocs.cometchat.com/docs?utm_source=github&utm_medium=example-code-readme)
- [👾 CometChat Pro GitHub](https://github.com/CometChat-Pro)
