import { useMutation, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { GETCURRENTUSER } from "./gql/queries";
import { SIGNIN, SIGNUP } from "./gql/mutations";
import { IAuthContext, ISignUpPayload } from "./types";
interface IProps {
  children: ReactNode;
}

const authContext = React.createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = (props: IProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { data: getSignedInUserData, refetch } = useQuery(GETCURRENTUSER);
  const [doSignIn] = useMutation(SIGNIN);
  const [doSignUp] = useMutation(SIGNUP);

  const handleSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await doSignIn({
        variables: {
          email: email,
          password: password
        }
      });
      if (res.data.signin) {
        localStorage.setItem("token", res.data.signin);
        await refetch();
      } else {
        setError("Your email or your password is incorrect");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading;
    }
  };

  const handleSignUp = async (payload: ISignUpPayload): Promise<void> => {
    setIsLoading(true);
    try {
      await doSignUp({
        variables: {
          ...payload
        }
      });
    } catch (error) {
      setError("Unable to register");
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setIsConnected(false);
  };

  useEffect(() => {
    if (getSignedInUserData) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [getSignedInUserData]);

  const contextValue: IAuthContext = {
    isConnected,
    setIsConnected,
    checkLogin: refetch,
    currentUser: getSignedInUserData?.getSignedInUser,
    handleSignIn,
    error,
    isLoading,
    signOut,
    handleSignUp
  };

  return <authContext.Provider value={contextValue}>{props.children}</authContext.Provider>;
};

export function useAuth() {
  return useContext(authContext);
}
export default AuthProvider;
