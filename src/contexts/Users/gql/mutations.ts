import { gql } from "@apollo/client";

export const UPDATEUSERROLE = gql`
  mutation updateRole($id: ID!, $role: String!) {
    updateRole(id: $id, role: $role) {
      id
      role
    }
  }
`;

export const DELETEUSER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
