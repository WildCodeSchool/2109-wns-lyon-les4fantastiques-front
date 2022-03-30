import { useLazyQuery } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
import { ReactNode } from "react";
import { GETCURRENTUSER } from "./requests/getCurrentUser";
import { IUser, IUsersContext } from "./types";

interface IProps {
  children: ReactNode;
}

const usersContext = React.createContext<IUsersContext>({} as IUsersContext);

const UsersProvider = (props: IProps) => {
  const [fetchCurrentUser, { data, error }] = useLazyQuery(GETCURRENTUSER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setCurrentUser(null);
  };

  const getCurrentUser = useCallback(async () => {
    await fetchCurrentUser();
    if (data?.getSignedInUser) {
      localStorage.setItem("isLoggedIn", "true");
      setCurrentUser(data.getSignedInUser);
    } else if (error && localStorage.getItem("token")) {
      signOut();
    }
  }, [data, fetchCurrentUser, error]);

  const contextValue: IUsersContext = {
    signOut,
    currentUser,
    getCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <usersContext.Provider value={contextValue}>
      {props.children}
    </usersContext.Provider>
  );
};
export { usersContext };
export default UsersProvider;
