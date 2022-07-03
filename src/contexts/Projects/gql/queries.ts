import { gql } from "@apollo/client";

export const FETCHPROJECTS = gql`
  query {
    getProjects {
      id
      name
      timeEstimation
      timeSpent
    }
  }
`;

export const FETCHPROJECTBYID = gql`
  query ($id: ID!) {
    getProject(id: $id) {
      id
      timeEstimation
      timeSpent
      userProject {
        role
        user {
          id
          firstname
          lastname
        }
      }
      tickets {
        id
        name
        status
        userTicket {
          user {
            firstname
          }
        }
      }
    }
  }
`;
