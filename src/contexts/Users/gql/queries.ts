import { gql } from "@apollo/client";

export const GETALLUSERS = gql`
  query {
    getUsers {
      id
      firstname
      lastname
      role
      email
    }
  }
`;
