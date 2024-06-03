import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(username: String!, email: String!, password: String!): Auth {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    
    }
  }
`;