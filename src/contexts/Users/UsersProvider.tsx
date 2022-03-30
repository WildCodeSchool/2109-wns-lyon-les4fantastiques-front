import { useLazyQuery } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { ReactNode } from "react";
import { GETCURRENTUSER } from "./requests/getCurrentUser";
import { IUser, IUsersContext } from "./types";

interface IProps {
  children: ReactNode;
}

const usersContext = React.createContext<IUsersContext>({} as IUsersContext);

const UsersProvider = (props: IProps) => {
  const [fetchCurrentUser] = useLazyQuery(GETCURRENTUSER, {
    onCompleted: (data) => {
      !localStorage.getItem("isLoggedIn") && localStorage.setItem("isLoggedIn", "true");
      setCurrentUser(data.getSignedInUser);
    },
    onError: () => {
      if (localStorage.getItem("token")) {
        signOut();
      }
    },
    fetchPolicy: "network-only"
  });
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setCurrentUser(null);
  };

  const getCurrentUser = useCallback(async () => {
    await fetchCurrentUser();
  }, [fetchCurrentUser]);

  const contextValue: IUsersContext = {
    signOut,
    currentUser,
    getCurrentUser
  };

  return <usersContext.Provider value={contextValue}>{props.children}</usersContext.Provider>;
};
export { usersContext };
export default UsersProvider;
