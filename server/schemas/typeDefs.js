const typeDefs = `
type Profile {
  _id: ID
  username: String
  email: String
  password: String
  orders: [Order]
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

  type Order {
    _id: ID
    purchaseDate: String
    shirts: [Shirt]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    shirts: [Shirt]!
    shirt(name: String!): Shirt
    order(_id: ID!): Order
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
  }
`;

module.exports = typeDefs;
