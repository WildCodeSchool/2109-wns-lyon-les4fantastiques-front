import { gql } from "@apollo/client";

export const ADDCOMMENT = gql`
  mutation ($data: CommentInput!) {
    createComment(data: $data) {
      id
    }
  }
`;
export const UPDATETICKET = gql`
  mutation ($data: UpdateTicketInput!) {
    updateTicket(data: $data) {
      id
    }
  }
`;
