import { Box, Button, Grid, TextField } from "@mui/material";
import Header from "../../components/Shared/Header/Header";
import "./ProjectCreationPage.scss";
import PersonIcon from "@mui/icons-material/Person";
import TimerIcon from "@mui/icons-material/Timer";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useContext, useEffect, useState } from "react";
import { projectsContext } from "../../contexts/Projects/ProjectsProvider";
import { useNavigate } from "react-router-dom";

function ProjectCreationPage(): JSX.Element {
  const [title, setTitle] = useState("");
  const [timeEstimation, setTimeEstimation] = useState("0");
  const [productOwner, setProductOwner] = useState("");
  const [firstMember, setFirstMember] = useState("");
  const [secondMember, setSecondMember] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [error, setError] = useState("");

  const { createProject, isLoading } = useContext(projectsContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormComplete(title !== "" && timeEstimation !== "0" && productOwner !== "");
  }, [title, timeEstimation, productOwner]);

  const submitForm = async () => {
    const projectBody = {
      name: title,
      timeEstimation: parseInt(timeEstimation)
    };
    const members = [{ email: productOwner, role: "PO" }];
    firstMember && members.push({ email: firstMember, role: "DEV" });
    secondMember && members.push({ email: secondMember, role: "DEV" });
    const res = await createProject(projectBody, members);

    if (res) {
      navigate("/projects");
    } else {
      setError("Unable to create project");
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{ width: "60%", backgroundColor: "#027bce", borderRadius: "5px" }}
        id="project-creation-box"
      >
        <Grid container spacing={4} direction="column" justifyContent="center" alignItems="center">
          <Grid item spacing={4}>
            <Grid
              container
              direction="row"
              spacing={10}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3} style={{ marginRight: -50, marginTop: 25 }}>
                <FolderOpenIcon color="secondary" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="name"
                  label="Project Title"
                  variant="standard"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={10}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3} style={{ marginRight: -50, marginTop: 25 }}>
                <TimerIcon color="secondary" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="timeEstimation"
                  label="Initial Time Estimee"
                  variant="standard"
                  sx={{ marginTop: 1 }}
                  type="number"
                  value={timeEstimation}
                  onChange={(e) => {
                    parseInt(e.target.value) && setTimeEstimation(e.target.value);
                  }}
                  inputProps={{
                    min: "0"
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={10}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3} style={{ marginRight: -50, marginTop: 25 }}>
                <PersonIcon color="secondary" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="Project Members"
                  label="Project Owner"
                  variant="standard"
                  sx={{ marginTop: 1 }}
                  value={productOwner}
                  onChange={(e) => setProductOwner(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={10}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3} style={{ marginRight: -50, marginTop: 25 }}>
                <PersonIcon color="secondary" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="Project Members"
                  label="Project Member Email"
                  variant="standard"
                  sx={{ marginTop: 1 }}
                  value={firstMember}
                  onChange={(e) => setFirstMember(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={10}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3} style={{ marginRight: -50, marginTop: 25 }}>
                <PersonIcon color="secondary" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="Project Members"
                  label="Project Member Email"
                  variant="standard"
                  sx={{ marginTop: 1 }}
                  value={secondMember}
                  onChange={(e) => setSecondMember(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Stack spacing={2} direction="row" />
        <Button variant="contained" sx={{ marginTop: 3, width: "25ch" }} id="button-add-member">
          ADD MORE MEMBERS
        </Button> */}
      </Box>
      {isLoading && <p style={{ textAlign: "center" }}>Creating project...</p>}
      {error && <p style={{ textAlign: "center" }}>{error}</p>}
      <Button
        variant="contained"
        sx={{ marginLeft: "60%", marginTop: "2%", width: "25ch" }}
        id="button-confirm-creation"
        onClick={submitForm}
        disabled={!isFormComplete && !isLoading}
      >
        CONFIRM CREATION
      </Button>
    </>
  );
}

export default ProjectCreationPage;
