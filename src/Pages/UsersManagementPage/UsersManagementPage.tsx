import Header from "../../components/Shared/Header/Header";
import {
  TableContainer,
  Paper,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  MenuItem,
  Select,
  Tooltip,
  IconButton
} from "@material-ui/core";
import "./UsersManagementPage.scss";
import { useContext, useEffect } from "react";
import { usersContext } from "../../contexts/Users/UsersProvider";
import DeleteIcon from "@mui/icons-material/Delete";

function UsersManagementPage() {
  const { users, getAllUsers } = useContext(usersContext);

  const updateUserRole = (newRole: any) => {
    console.log(newRole);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    users.length > 0 && console.log(typeof users[0].role);
  }, [users]);

  return (
    <>
      <Header />
      {users && (
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="users table">
              <TableHead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <Table>Delete</Table>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={`row-${index}`}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{`${user.firstname} ${user.lastname}`}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Select
                        labelId="role-label"
                        id="user-role"
                        value={user.role}
                        onChange={(e) => updateUserRole(e.target.value)}
                      >
                        <MenuItem>DEV</MenuItem>
                        <MenuItem>PO</MenuItem>
                        <MenuItem>ADMIN</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Delete User">
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}

export default UsersManagementPage;
