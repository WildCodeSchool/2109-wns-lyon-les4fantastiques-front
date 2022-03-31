import { gql } from "@apollo/client";

export const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(data: { email: $email, password: $password })
  }
`;
