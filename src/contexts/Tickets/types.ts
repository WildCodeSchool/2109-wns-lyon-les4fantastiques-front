/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from "react";
import { IProject } from "../Projects/types";
import { IUser } from "../Users/types";

export interface ITicketsContext {
  tickets: ITicket[];
  ticket: ITicket | undefined;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  getTickets: (userId: number) => void;
  getTicketById: (id: number) => void;
  addCommentToTicket: (ticketId: number, content: string) => Promise<boolean>;
  updateTicket: (ticketId: number, ticketBody: ITicket) => Promise<boolean>;
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
  comments: IComment[];
  pictures: any[];
  userTicket: IUserTicket[];
}

export interface IComment {
  content: string;
  author: IUser;
}

export interface IUserTicket {
  role: string;
  user: IUser;
  email: string;
}
