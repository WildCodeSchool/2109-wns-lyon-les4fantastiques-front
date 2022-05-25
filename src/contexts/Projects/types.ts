/* eslint-disable no-unused-vars */

export interface IProjectsContext {
  createProject: (projectToCreate: IProjectInput, users: IUserInput[]) => Promise<boolean>;
  isLoading: boolean;
  getProjects: () => void;
  projects: IProject[];
}

export interface IProject {
  id: number;
  name: string;
  timeEstimation: number;
  timeSpent: number;
}

export interface IProjectInput {
  name: string;
  timeEstimation: number;
}

export interface IUserInput {
  email: string;
  role: string;
}
