import { Box, Button, Grid } from "@mui/material";
import Header from "../../components/Shared/Header/Header";
import "./TaskCreationPage.scss";

function TaskCreationPage(): JSX.Element {
  return (
    <>
      <Header></Header>
      <Box
        sx={{ width: "80%", backgroundColor: "#027bce", borderRadius: "5px" }}
        id="ticket-creation-box"
      >
        <Grid container spacing={4} direction="column" justifyContent="center" alignItems="center">
          <Button variant="contained" sx={{ marginTop: 3, width: "15ch" }} id="button-add-member">
            {" "}
            Upload
          </Button>
          <Button variant="contained" sx={{ marginTop: 3, width: "15ch" }} id="button-add-member">
            {" "}
            Upload
          </Button>
        </Grid>
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

export default TaskCreationPage;
