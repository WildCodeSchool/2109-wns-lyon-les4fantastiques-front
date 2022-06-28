import { Button, CircularProgress, Grid } from "@mui/material";
import Header from "../../../components/Shared/Header/Header";
import "./ProjectDetailsPage.scss";
import TimerIcon from "@mui/icons-material/Timer";
import PercentIcon from "@mui/icons-material/Percent";
import UserCard from "../../../components/Projects/UserCard";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { projectsContext } from "../../../contexts/Projects/ProjectsProvider";
import { getLastPart } from "../../../helpers/getLastPart";
import TextField from "@mui/material/TextField";

function ProjectDetailsPage(): JSX.Element {
  const [userToAdd, setUserToAdd] = useState("");
  const [addUserError, setAddUserError] = useState("");
  const location = useLocation();
  const { project, getProjectById, addUserToProject } = useContext(projectsContext);

  const getPercentageTimeSpent = () => {
    if (project?.timeSpent === 0) {
      return 0;
    }
    if (project?.timeEstimation && project.timeEstimation) {
      return Math.floor((project?.timeSpent / project?.timeEstimation) * 100);
    }
  };

  const getPercentageOfTasksCompleted = () => {
    if (project?.tickets.length === 0) {
      return 0;
    }
    const doneTickets = project?.tickets.filter((ticket: any) => ticket.status === "done");
    if (doneTickets.length === 0) {
      return 0;
    }
    return Math.floor((doneTickets.length / project?.tickets.length) * 100);
  };

  const handleAddUser = async () => {
    if (userToAdd && project) {
      const res = await addUserToProject(userToAdd, +project.id);
      if (!res) {
        setAddUserError("Unable to add user");
      } else {
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    const pathname = getLastPart(location?.pathname);
    if (pathname) {
      const id = parseInt(pathname);
      if (id) {
        getProjectById(id);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Grid
        container
        spacing={2}
        direction="row"
        style={{ padding: "2%", display: "flex", justifyContent: "space-around" }}
      >
        {project ? (
          <>
            <Grid item xs={4}>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={2}>
                  <h1 style={{ color: "#ef476f" }}>
                    <span style={{ color: "white" }}>Product</span> Owner
                  </h1>
                  <div className="card-container">
                    {project.userProject
                      .filter((userProject: any) => userProject.role === "PO")
                      .map((userProject: any, index: number) => (
                        <UserCard
                          key={index}
                          name={`${userProject.user.firstname} ${userProject.user.lastname}`}
                          role={userProject.role}
                        />
                      ))}
                  </div>
                </Grid>

                <Grid item xs={2}>
                  <h1 style={{ color: "#06d6a0" }}>
                    <span style={{ color: "white" }}>Project</span> Members
                  </h1>
                  <div className="card-container">
                    {project.userProject
                      .filter((userProject: any) => userProject.role === "DEV")
                      .map((userProject: any, index: number) => (
                        <UserCard
                          key={index}
                          name={`${userProject.user.firstname} ${userProject.user.lastname}`}
                          role={userProject.role}
                        />
                      ))}
                    <div className="text-field">
                      <TextField
                        id="userToAdd"
                        label="Add User"
                        variant="standard"
                        value={userToAdd}
                        onChange={(e) => setUserToAdd(e.target.value)}
                      />
                    </div>
                    <Button variant="contained" id="add-user-button" onClick={handleAddUser}>
                      Add User
                    </Button>
                    {addUserError && addUserError}
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <h1 style={{ color: "#ffd166" }}>
                <span style={{ color: "white" }}>Project</span> Details
              </h1>
              <Grid
                container
                direction="row"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                sx={{ borderRadius: 4, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", marginTop: 5 }}
              >
                <Grid item xs={2}>
                  <TimerIcon style={{ color: "#ffd166" }} />
                </Grid>
                <Grid item xs={8}>
                  <p>Initial Time Spent Estimee</p>
                </Grid>
                <Grid item xs={2}>
                  <p>{project.timeEstimation} days</p>
                </Grid>
                <Grid item xs={2}>
                  <TimerIcon style={{ color: "#ffd166" }} />
                </Grid>
                <Grid item xs={8}>
                  <p>Total Time Spent</p>
                </Grid>
                <Grid item xs={2}>
                  <p>{project.timeSpent} days</p>
                </Grid>
                <Grid item xs={2}>
                  <PercentIcon style={{ color: "#ffd166" }} />
                </Grid>
                <Grid item xs={8}>
                  <p>Percentage Time Spent</p>
                </Grid>
                <Grid item xs={2}>
                  <p>{getPercentageTimeSpent()} %</p>
                </Grid>
                <Grid item xs={2}>
                  <PercentIcon style={{ color: "#ffd166" }} />
                </Grid>
                <Grid item xs={8}>
                  <p>Percentage Tasks Accomplished</p>
                </Grid>
                <Grid item xs={2}>
                  <p>{getPercentageOfTasksCompleted()} %</p>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </>
  );
}

export default ProjectDetailsPage;
