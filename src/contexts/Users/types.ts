export interface IUsersContext {
  currentUser: IUser | null;
  getCurrentUser: () => Promise<void>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  signOut: () => void;
}

export interface IUser {
  firstname: string;
  lastname: string;
  role: string;
  email: string;
}
