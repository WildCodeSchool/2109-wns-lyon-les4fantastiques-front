import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ConnexionPage.scss";
import { Grid } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import { gql, useMutation } from "@apollo/client";
import { usersContext } from "../../contexts/Users/UsersProvider";

const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(data: { email: $email, password: $password })
  }
`;

export function ConnexionPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const { getCurrentUser } = useContext(usersContext);
  const navigate = useNavigate();
  const [doSignIn, { loading, error }] = useMutation(SIGNIN, {
    context: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });

  const onSubmit = async () => {
    try {
      const res = await doSignIn({
        variables: {
          email: email,
          password: password,
        },
      });
      if (res?.data.signin) {
        localStorage.setItem("token", res.data.signin);
        localStorage.setItem("isLoggedIn", "true");
        await getCurrentUser();
        navigate("/projects");
      } else {
        setLoginError("Your email or your password is incorrect");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setIsFormCompleted(!!email && !!password);
  }, [email, password, error, loading]);

  return (
    <>
      <div id="main_central_element">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item spacing={3}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
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
              <Grid
                item
                xs={3}
                container
                direction="column"
                alignItems="center"
              >
                {error && <p>An error occured, please try again later</p>}
                {loginError && <p className="error">{loginError}</p>}
                <Button
                  onClick={onSubmit}
                  variant="contained"
                  sx={{ marginTop: 3, width: "25ch" }}
                  disabled={loading || !isFormCompleted}
                >
                  Sign In
                </Button>
              </Grid>

              <Grid item xs={2}>
                <Link
                  to="/inscription"
                  style={{ color: "#027bce", textDecoration: "none" }}
                >
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
