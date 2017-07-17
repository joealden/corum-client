const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL schema
const schema = buildSchema(`
  type Query {
    test: String
  }
`);

// GraphQL resolvers
const rootValue = { 
  test: () => 'Test Value'
};

// Create express app
const app = express();

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

// Start HTTP server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
