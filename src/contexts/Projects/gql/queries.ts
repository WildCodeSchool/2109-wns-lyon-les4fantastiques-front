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
