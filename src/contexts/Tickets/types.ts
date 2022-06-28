/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from "react";
import { IProject } from "../Projects/types";

export interface ITicketsContext {
  tickets: ITicket[];
  ticket: ITicket | undefined;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  getTickets: (userId: number) => void;
  getTicketById: (id: number) => void;
}

export interface ITicket {
  id: number;
  name: string;
  description: string;
  creationDate: Date;
  status: string;
  timeEstimation: number;
  timeSpent: number;
  isActive: boolean;
  project: IProject;
  comments: any[];
  pictures: any[];
}
