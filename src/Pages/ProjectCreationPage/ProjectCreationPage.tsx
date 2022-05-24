import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import Header from "../../components/Shared/Header/Header";
import "./ProjectCreationPage.scss";
import PersonIcon from "@mui/icons-material/Person";
import TimerIcon from "@mui/icons-material/Timer";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useState } from "react";

function ProjectCreationPage(): JSX.Element {
  const [title, setTitle] = useState("");
  const [timeEstimee, setTimeEstimee] = useState("0");
  const [productOwner, setProductOwner] = useState("");
  const [firstMember, setFirstMember] = useState("");
  const [secondMember, setSecondMember] = useState("");

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
                  value={timeEstimee}
                  onChange={(e) => {
                    parseInt(e.target.value) && setTimeEstimee(e.target.value);
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
        <Stack spacing={2} direction="row" />
        <Button variant="contained" sx={{ marginTop: 3, width: "25ch" }} id="button-add-member">
          ADD MORE MEMBERS
        </Button>
      </Box>

      <Button
        variant="contained"
        sx={{ marginLeft: "60%", marginTop: "2%", width: "25ch" }}
        id="button-confirm-creation"
      >
        CONFIRM CREATION
      </Button>
    </>
  );
}

export default ProjectCreationPage;
