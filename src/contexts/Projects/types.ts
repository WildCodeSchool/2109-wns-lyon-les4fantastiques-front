/* eslint-disable no-unused-vars */

import { FetchResult } from "@apollo/client";

export interface IProjectsContext {
  createProject: (projectToCreate: IProjectInput, users: IUserInput[]) => Promise<boolean>;
  isLoading: boolean;
  getProjects: () => void;
  projects: IProject[];
  getProjectById: (id: number) => void;
  project: IProject | undefined;
  addUserToProject: (
    userEmail: string,
    projectId: number
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>> | undefined>;
}

export interface IProject {
  id: number;
  name: string;
  timeEstimation: number;
  timeSpent: number;
  tickets: any;
  userProject: any;
}

export interface IProjectInput {
  name: string;
  timeEstimation: number;
}

export interface IUserInput {
  email: string;
  role: string;
}
