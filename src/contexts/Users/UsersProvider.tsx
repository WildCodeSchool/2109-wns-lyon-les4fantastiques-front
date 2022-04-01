import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { ReactNode } from "react";
import { DELETEUSER, UPDATEUSERROLE } from "./gql/mutations";
import { GETALLUSERS } from "./gql/queries";
import { IUsersContext } from "./types";

interface IProps {
  children: ReactNode;
}

const usersContext = React.createContext<IUsersContext>({} as IUsersContext);

const UsersProvider = (props: IProps) => {
  const [users, setUsers] = useState([]);
  const [doUpdateRole] = useMutation(UPDATEUSERROLE);
  const [doDeleteUser] = useMutation(DELETEUSER);

  const [fetchAllUsers] = useLazyQuery(GETALLUSERS, {
    onCompleted: (data) => {
      setUsers(data.getUsers);
    }
  });

  const getAllUsers = useCallback(async () => {
    await fetchAllUsers();
  }, []);

  const updateUserRole = async (id: number, role: string): Promise<boolean> => {
    try {
      const res = await doUpdateRole({
        variables: {
          id: id,
          role: role
        }
      });
      if (res.data.updateRole) {
        return true;
      } else return false;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const deleteUser = async (id: number): Promise<boolean> => {
    try {
      await doDeleteUser({
        variables: {
          id: id
        }
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  const contextValue: IUsersContext = {
    getAllUsers,
    users,
    updateUserRole,
    deleteUser
  };

  return <usersContext.Provider value={contextValue}>{props.children}</usersContext.Provider>;
};
export { usersContext };
export default UsersProvider;
