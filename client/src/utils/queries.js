import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      username
      orders {
        _id
        purchaseDate
        shirts {
          _id
          name
          sizes
          style
          color
          description
          image
        }
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;

export const QUERY_SHIRTS = gql`
  query allShirts {
    shirts {
      _id
      name
      sizes
      style
      color
      description
      image
    }
  }
`;

export const QUERY_SINGLE_SHIRT = gql`
  query singleShirt($shirtId: ID!) {
    shirt(shirtId: $shirtId) {
      _id
      name
      sizes
      style
      color
      description
      image
    }
  }
`;
