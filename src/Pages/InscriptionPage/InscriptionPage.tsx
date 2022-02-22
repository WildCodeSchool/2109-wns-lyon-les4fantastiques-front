import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import gql from "graphql-tag";
import './InscriptionPage.scss';

const inscription = gql`
    mutation signup($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
      signup(data: {firstname: $firstname, lastname: $lastname, email: $email, password: $password}) {
        id
        firstname
        lastname
        email
      }
    }
  `;

export function InscriptionPage(): JSX.Element {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [doSignUp, { loading, error }] = useMutation(inscription);

  const onSubmit = async () => {
    await doSignUp({
        variables: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password
        }
    });
};

    return (
      <>
      <div id="main_central_element">
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
    <TextField id="Firstname" label="Firstname" variant="standard" sx={{ marginTop: 1 }} value={firstname} onChange={e => setFirstname(e.target.value)}/>
    <TextField id="Lastname" label="Lastname" variant="standard" sx={{ marginTop: 1 }} value={lastname} onChange={e => setLastname(e.target.value)}/>
    <TextField id="Email" label="Email" variant="standard" sx={{ marginTop: 1 }} value={email} onChange={e => setEmail(e.target.value)}/>
    <TextField id="Password" label="Password" variant="standard" sx={{ marginTop: 1 }} value={password} onChange={e => setPassword(e.target.value)}/>
    <TextField id="Password Confirmation" label="Password Confirmation" variant="standard" sx={{ marginTop: 1 }} value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
    <Stack spacing={2} direction="row"></Stack>
    <Button onClick={onSubmit} variant="contained" sx={{ marginTop: 3, width: '25ch' }} disabled={loading === true}>Sign Up</Button>
    {error && <p>Error</p>}
    <Link to="/connexion">
    <p>Always registred ? Sign in here</p>
    </Link>
    </div>
    </>
    )
}