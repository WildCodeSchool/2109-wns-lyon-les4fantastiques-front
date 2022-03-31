import { useLazyQuery } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { ReactNode } from "react";
import { GETCURRENTUSER } from "../Auth/gql/getCurrentUser";
import { GETALLUSERS } from "./requests/getAllUsers";
import { IUser, IUsersContext } from "./types";

interface IProps {
  children: ReactNode;
}

const usersContext = React.createContext<IUsersContext>({} as IUsersContext);

const UsersProvider = (props: IProps) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState([]);

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

  const [fetchAllUsers] = useLazyQuery(GETALLUSERS, {
    onCompleted: (data) => {
      setUsers(data.getUsers);
    }
  });

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setCurrentUser(null);
  };
  const getAllUsers = useCallback(async () => {
    await fetchAllUsers();
  }, []);

  const getCurrentUser = useCallback(async () => {
    await fetchCurrentUser();
  }, [fetchCurrentUser]);

  const contextValue: IUsersContext = {
    signOut,
    currentUser,
    getCurrentUser,
    getAllUsers,
    users
  };

  return <usersContext.Provider value={contextValue}>{props.children}</usersContext.Provider>;
};
export { usersContext };
export default UsersProvider;
