/* eslint-disable no-unused-vars */

export interface IProjectsContext {
  createProject: (projectToCreate: IProjectInput, users: IUserInput[]) => Promise<boolean>;
  isLoading: boolean;
}

export interface IProject {
  id: number;
  name: string;
  timeEstimation: number;
}

export interface IProjectInput {
  name: string;
  timeEstimation: number;
}

export interface IUserInput {
  email: string;
  role: string;
}
