import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import gql from "graphql-tag";
import "./InscriptionPage.scss";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import { Grid } from "@mui/material";

const registration = gql`
  mutation signup(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    signup(
      data: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
      }
    ) {
      id
      firstname
      lastname
      email
    }
  }
`;

export function InscriptionPage(): JSX.Element {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const navigate = useNavigate();
  const [doSignUp, { loading, error }] = useMutation(registration, {
    context: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });

  const onSubmit = async () => {
    try {
      await doSignUp({
        variables: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
      });
      !loading && navigate("/connexion");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setIsFormCompleted(
      !!firstname &&
        !!lastname &&
        !!email &&
        !!password &&
        !!passwordConfirmation
    );
  }, [firstname, lastname, email, password, passwordConfirmation]);

  return (
    <>
      <div id="main_central_element">
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
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
                <PersonIcon color="secondary" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="Firstname"
                  label="Firstname"
                  variant="standard"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
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
                  id="Lastname"
                  label="Lastname"
                  variant="standard"
                  sx={{ marginTop: 1 }}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
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
                <AlternateEmailIcon color="secondary" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="Email"
                  label="Email"
                  variant="standard"
                  sx={{ marginTop: 1 }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <Grid item xs={10}>
                <TextField
                  id="Password"
                  label="Password"
                  type="password"
                  variant="standard"
                  sx={{ marginTop: 1 }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <Grid item xs={10}>
                <TextField
                  id="Password Confirmation"
                  label="Password Confirmation"
                  type="password"
                  variant="standard"
                  sx={{ marginTop: 1 }}
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Stack spacing={2} direction="row" />
        <Button
          onClick={onSubmit}
          variant="contained"
          sx={{ marginTop: 3, width: "25ch" }}
          disabled={loading || !isFormCompleted}
        >
          Sign Up
        </Button>
        {error && <p>Please fill out all fields completely. </p>}
        <Link
          to="/connexion"
          style={{ color: "#027bce", textDecoration: "none" }}
        >
          <p>Already registred ? Sign in here</p>
        </Link>
      </div>
    </>
  );
}
