/* eslint-disable no-unused-vars */
import { IUser } from "../Users/types";

export interface IAuthContext {
  isConnected: boolean;
  setIsConnected: Function;
  checkLogin: Function;
  currentUser: IUser;
  handleSignIn: (email: string, password: string) => Promise<void>;
  handleSignUp: (payload: ISignUpPayload) => Promise<void>;
  error: string;
  isLoading: boolean;
  signOut: () => void;
}

export interface ISignUpPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
