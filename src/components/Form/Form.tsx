import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Form.scss';

export function Form () {

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
    <TextField id="Firstname" label="Firstname" variant="standard" sx={{ marginTop: 1 }} />
    <TextField id="Lastname" label="Lastname" variant="standard" sx={{ marginTop: 1 }} />
    <TextField id="Email" label="Email" variant="standard" sx={{ marginTop: 1 }} />
    <TextField id="Password" label="Password" variant="standard" sx={{ marginTop: 1 }} />
    <TextField id="Password Confirmation" label="Password Confirmation" variant="standard" sx={{ marginTop: 1 }} />
    <Stack spacing={2} direction="row"></Stack>
    <Button variant="contained" sx={{ marginTop: 3, width: '25ch' }}>Sign Up</Button>
    <p>Always registred ? Sign in here</p>
    </div>
        </>
    )
}