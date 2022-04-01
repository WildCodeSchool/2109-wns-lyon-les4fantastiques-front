import Header from "../../components/Shared/Header/Header";
import "./UsersManagementPage.scss";
import { useContext, useEffect, useState } from "react";
import { usersContext } from "../../contexts/Users/UsersProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TableFooter
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

function UsersManagementPage() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);
  const { users, getAllUsers, updateUserRole, deleteUser } = useContext(usersContext);

  const handleUpdateUserRole = async (userId: number, newRole: string) => {
    if (await updateUserRole(userId, newRole)) {
      window.location.reload();
    } else {
      setIsError(true);
    }
  };

  const handleDeleteUser = async () => {
    if (userToDelete && (await deleteUser(userToDelete))) {
      window.location.reload();
    } else {
      setIsError(true);
    }
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    getAllUsers();
  }, [users]);

  return (
    <>
      <Header />
      {users.length > 0 ? (
        <div className="table-container">
          <TableContainer component={Paper}>
            <Table aria-label="users table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{`${user.firstname} ${user.lastname}`}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Select
                          variant="standard"
                          labelId="role-label"
                          id="user-role"
                          value={user.role}
                          onChange={(e) => handleUpdateUserRole(user.id, e.target.value as string)}
                        >
                          <MenuItem value="DEV">DEV</MenuItem>
                          <MenuItem value="PO">PO</MenuItem>
                          <MenuItem value="ADMIN">ADMIN</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Delete User">
                          <IconButton
                            onClick={() => {
                              setIsDialogOpen(true);
                              setUserToDelete(user.id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={users.length}
                    onPageChange={handleChangePage}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    labelRowsPerPage={"Users per page"}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[10, 30, 100]}
                    SelectProps={{
                      inputProps: { "aria-label": "Users per page" },
                      native: true
                    }}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <CircularProgress style={{ marginLeft: "50%", marginTop: "2%" }} />
      )}

      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
        <DialogContent>Do you really want to delete that user ?</DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsDialogOpen(false);
              setUserToDelete(null);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleDeleteUser}>Delete</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isError}
        onClose={() => window.location.reload()}
        aria-labelledby="error-dialog-title"
        aria-describedby="error-dialog-description"
      >
        <DialogTitle id="error-dialog-title">Error</DialogTitle>
        <DialogContent>
          An errror occured when {userToDelete ? "deleting the user" : "updating the user"}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => window.location.reload()}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UsersManagementPage;
