import { gql } from "@apollo/client";

export const CREATEPROJECT = gql`
  mutation ($data: ProjectInput!) {
    createProject(data: $data) {
      id
      name
      isActive
      timeEstimation
    }
  }
`;

export const ADDUSERTOPROJECT = gql`
  mutation ($data: AddUserToProjectInput!) {
    addUserToProject(data: $data) {
      id
      userProject {
        role
      }
    }
  }
`;
