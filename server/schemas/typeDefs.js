const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
  }

  type Shirt {
    _id: ID
    name: String
    sizes: [String]
    color: String
    image: String
    description: String
    style: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(username: String!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    shirts: [Shirt]!
    shirt(name: String!): Shirt
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
