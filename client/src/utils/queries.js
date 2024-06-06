import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query getUsers
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  
`;

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($profileId: ID!) {
//     profile(profileId: $profileId) {
//       _id
//       name
//       skills
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       name
//       skills
//     }
//   }
// `;
