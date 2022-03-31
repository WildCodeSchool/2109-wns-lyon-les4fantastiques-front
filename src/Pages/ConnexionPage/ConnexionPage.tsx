import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ConnexionPage.scss";
import { Grid } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import { useAuth } from "../../contexts/Auth/AuthProvider";

export function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const { handleSignIn, error, isLoading } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async () => {
    await handleSignIn(email, password);
    !error && navigate("/projects");
  };

  useEffect(() => {
    setIsFormCompleted(!!email && !!password);
  }, [email, password, error]);

  return (
    <>
      <div id="main_central_element">
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
          <Grid item spacing={3}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" }
              }}
              noValidate
              autoComplete="off"
            />

            <Grid
              container
              direction="row"
              spacing={10}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3} style={{ marginRight: -50, marginTop: 25 }}>
                <AlternateEmailIcon color="secondary" />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id="Email"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ marginTop: 1 }}
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
                <LockIcon color="secondary" />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id="Password"
                  label="Password"
                  variant="standard"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ marginTop: 1 }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Stack spacing={3} direction="row" />
              <Grid item xs={3} container direction="column" alignItems="center">
                {error && <p>An error occured, please try again later</p>}
                {error && <p className="error">{error}</p>}
                <Button
                  onClick={onSubmit}
                  variant="contained"
                  sx={{ marginTop: 3, width: "25ch" }}
                  disabled={isLoading || !isFormCompleted}
                >
                  Sign In
                </Button>
              </Grid>

              <Grid item xs={2}>
                <Link to="/inscription" style={{ color: "#027bce", textDecoration: "none" }}>
                  <p>No account yet ? Sign up here</p>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
