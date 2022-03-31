export interface IUsersContext {
  currentUser: IUser | null;
  getCurrentUser: () => Promise<void>;
  users: IUser[];
  getAllUsers: () => Promise<void>;
  signOut: () => void;
}

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  role: string;
  email: string;
}
