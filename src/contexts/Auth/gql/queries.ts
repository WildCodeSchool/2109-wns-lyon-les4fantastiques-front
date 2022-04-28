import { gql } from "@apollo/client";

export const GETCURRENTUSER = gql`
  query {
    getSignedInUser {
      id
      firstname
      lastname
      role
      email
    }
  }
`;
