export interface IUsersContext {
  currentUser: IUser | null;
  getCurrentUser: () => Promise<void>;
  signOut: () => void;
}

export interface IUser {
  firstname: string;
  lastname: string;
  role: string;
  email: string;
}
