import { gql } from "@apollo/client";

export const GETCURRENTUSER = gql`
  query {
    getSignedInUser {
      firstname
      lastname
      role
      email
    }
  }
`;
