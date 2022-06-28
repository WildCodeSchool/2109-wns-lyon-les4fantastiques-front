import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Shared/Header/Header";
import { useAuth } from "../../../contexts/Auth/AuthProvider";
import { ticketsContext } from "../../../contexts/Tickets/TicketsProvider";
import { ITicket } from "../../../contexts/Tickets/types";
import "./TasksListPage.scss";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function TasksListPage() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { tickets, getTickets } = useContext(ticketsContext);

  const handlePageChange = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (currentUser) {
      getTickets(currentUser.id);
    }
  }, [currentUser]);

  useEffect(() => {
    console.log(tickets);
  }, [tickets]);

  return (
    <>
      <Header />
      {currentUser && tickets && (
        <div className="table-container">
          <TableContainer component={Paper}>
            <Table aria-label="tickets-table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell>Time Estimation</TableCell>
                  <TableCell>Time spent</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((ticket: ITicket, index: number) => (
                    <TableRow key={`ticket-${index}`}>
                      <TableCell>{ticket.name}</TableCell>
                      <TableCell>{ticket.project.name}</TableCell>
                      <TableCell>{ticket.timeEstimation}</TableCell>
                      <TableCell>{ticket.timeSpent}</TableCell>
                      <TableCell>
                        <div
                          style={{ width: "100%", cursor: "pointer" }}
                          onClick={() => navigate(`/ticket/${ticket.id}`)}
                        >
                          <OpenInNewIcon />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={tickets.length}
                    onPageChange={handlePageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    labelRowsPerPage="Tickets per page"
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[10, 30, 100]}
                    SelectProps={{
                      inputProps: { "aria-label": "Tickets per page" },
                      native: true
                    }}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <p>TasksListPage</p>
        </div>
      )}
    </>
  );
}

export default TasksListPage;
