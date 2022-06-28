import { gql } from "@apollo/client";

export const FETCHTICKETS = gql`
  query ($data: TicketFiltersInput!) {
    getTickets(data: $data) {
      id
      name
      timeEstimation
      timeSpent
      project {
        name
      }
      userTicket {
        role
        user {
          firstname
          lastname
        }
      }
    }
  }
`;

export const FETCHTICKETBYID = gql`
  query ($id: ID!) {
    getTicket(id: $id) {
      id
      name
      timeEstimation
      timeSpent
      project {
        name
      }
      userTicket {
        role
        user {
          firstname
          lastname
        }
      }
    }
  }
`;
