import { gql } from "@apollo/client";

export const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(data: { email: $email, password: $password })
  }
`;

export const SIGNUP = gql`
  mutation signup($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    signup(
      data: { firstname: $firstname, lastname: $lastname, email: $email, password: $password }
    ) {
      firstname
    }
  }
`;
