import {
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
import Header from "../../components/Shared/Header/Header";
import { useAuth } from "../../contexts/Auth/AuthProvider";
import { projectsContext } from "../../contexts/Projects/ProjectsProvider";
import { IProject } from "../../contexts/Projects/types";
import "./ProjectsListPage.scss";
import Paper from "@mui/material/Paper";

function ProjectsListPage() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const { currentUser } = useAuth();
  const { projects, getProjects } = useContext(projectsContext);

  const handlePageChange = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <>
        <Header />
        {currentUser && projects && (
          <div className="table-container">
            <TableContainer component={Paper}>
              <Table aria-label="projects table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Time Estimation</TableCell>
                    <TableCell>Time Spent</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((project: IProject, index: number) => (
                      <TableRow key={`project-${index}`}>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>{project.timeEstimation}</TableCell>
                        <TableCell>{project.timeSpent}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      count={projects.length}
                      onPageChange={handlePageChange}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      labelRowsPerPage="Projects per page"
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      rowsPerPageOptions={[10, 30, 100]}
                      SelectProps={{
                        inputProps: { "aria-label": "Projects per page" },
                        native: true
                      }}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
        )}
      </>
    </>
  );
}

export default ProjectsListPage;
