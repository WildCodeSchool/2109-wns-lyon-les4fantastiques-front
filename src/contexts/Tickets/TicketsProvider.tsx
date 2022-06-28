import { useLazyQuery } from "@apollo/client";
import { createContext, ReactNode, useState } from "react";
import { FETCHPROJECTBYID } from "../Projects/gql/queries";
import { FETCHTICKETS } from "./gql/queries";
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

  const [fetchTicketById] = useLazyQuery(FETCHPROJECTBYID, {
    onCompleted: (data) => {
      setTicket(data.getTicket);
    }
  });

  const getTickets = (userId: number): void => {
    fetchTickets({ variables: { data: { userAssignedId: +userId } } });
  };

  const getTicketById = (id: number): void => {
    fetchTicketById({ variables: { id } });
  };

  const contextValue: ITicketsContext = {
    tickets,
    ticket,
    isLoading,
    setIsLoading,
    getTickets,
    getTicketById
  };
  return <ticketsContext.Provider value={contextValue}>{props.children}</ticketsContext.Provider>;
};

export { ticketsContext };
export default TicketsProvider;
