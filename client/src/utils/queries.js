import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      shirts {
        _id
        color
        sizes
        image
        name
        style
        description
      }
    }
  }
`;

export const QUERY_SHIRTS = gql`
  query getShirts {
    shirts {
      _id
      color
      sizes
      image
      name
      style
      description
    }
  }
  `;

  export const QUERY_SINGLE_SHIRT = gql`
  query getSingleShirt($shirtId: ID!) {
    shirt(shirtId: $shirtId) {
      _id
      color
      sizes
      image
      name
      style
      description
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      shirts {
        _id
        color
      sizes
      image
      name
      style
      description
      }
    }
  }
`;
