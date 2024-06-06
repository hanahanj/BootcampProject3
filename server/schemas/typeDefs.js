
const { gql } = require('apollo-server');

const typeDefs= gql `
type User {
    _id: ID
    username: String
    email: String
    password: String
    # savedShirts: [shirtSchema]
  }

  type Auth {
    token: ID!
    user: User!
  }


type Query{
    users:[User]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): AuthPayload!
  }
  
  type AuthPayload {
    token: String!
    user: User!
  }

  `;

  module.exports = typeDefs;

