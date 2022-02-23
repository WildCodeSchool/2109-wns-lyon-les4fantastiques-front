import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ConnexionPage.scss';


export function ConnexionPage() : JSX.Element {
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
    <TextField id="Email" label="Email" variant="standard" sx={{ marginTop: 1 }} />
    <TextField id="Password" label="Password" variant="standard" sx={{ marginTop: 1 }} />
    <Stack spacing={2} direction="row"></Stack>
    <Button variant="contained" sx={{ marginTop: 3, width: '25ch' }}>Sign In</Button>
    <Link to="/inscription" style={{ color: '#027bce'}}>
    <p>No account yet ? Sign up here</p>
    </Link>
    </div>
        </>
    )
}