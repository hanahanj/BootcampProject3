const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Shirt {
    _id: ID
    color: String
    sizes: Array
    image: String
    name: String
    style: String
    description: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    shirt(shirtId: ID!): Shirt
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
