const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    shirts: [Shirt]!
  }

  type Shirt {
    _id: ID
    color: String
    sizes: [String]
    image: String
    name: String
    style: String
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    shirts(username: String): [Shirt]
    shirt(shirtId: ID!): Shirt
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
