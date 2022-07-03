import { useLazyQuery, useMutation } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { ADDCOMMENT, UPDATETICKET } from "./gql/mutations";
import { FETCHTICKETBYID, FETCHTICKETS } from "./gql/queries";
import { ITicket, ITicketsContext } from "./types";

interface IProps {
  children: ReactNode;
}

const ticketsContext = createContext<ITicketsContext>({} as ITicketsContext);

const TicketsProvider = (props: IProps) => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [ticket, setTicket] = useState<ITicket>();
  const [isLoading, setIsLoading] = useState(false);

  const [fetchTickets] = useLazyQuery(FETCHTICKETS, {
    onCompleted: (data) => {
      setTickets(data.getTickets);
    }
  });

  const [fetchTicketById] = useLazyQuery(FETCHTICKETBYID, {
    onCompleted: (data) => {
      setTicket(data.getTicket);
    }
  });

  const [doAddCommentToTicket] = useMutation(ADDCOMMENT);
  const [doUpdateTicket] = useMutation(UPDATETICKET);

  const getTickets = (userId: number): void => {
    fetchTickets({ variables: { data: { userAssignedId: +userId } } });
  };

  const getTicketById = (id: number): void => {
    fetchTicketById({ variables: { id } });
  };

  const addCommentToTicket = async (ticketId: number, content: string) => {
    try {
      await doAddCommentToTicket({
        variables: {
          data: { ticketId, content }
        }
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const updateTicket = async (ticketId: number, ticketBody: ITicket) => {
    try {
      await doUpdateTicket({
        variables: {
          data: { ticketId, ...ticketBody }
        }
      });
      return true;
    } catch (error) {
      return false;
    }
  };

  const contextValue: ITicketsContext = {
    tickets,
    ticket,
    isLoading,
    setIsLoading,
    getTickets,
    getTicketById,
    addCommentToTicket,
    updateTicket
  };
  return <ticketsContext.Provider value={contextValue}>{props.children}</ticketsContext.Provider>;
};

export { ticketsContext };
export default TicketsProvider;
