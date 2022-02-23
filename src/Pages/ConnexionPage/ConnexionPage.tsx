import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ConnexionPage.scss';
import { Grid } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';


export function ConnexionPage() : JSX.Element {
    return (
        <>
        <div id="main_central_element">
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
        <Grid item spacing={3}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
    
    <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
      <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><AlternateEmailIcon color="secondary"></AlternateEmailIcon></Grid>
      <Grid item xs={9}><TextField id="Email" label="Email" variant="standard" sx={{ marginTop: 1 }}/></Grid>
    </Grid>
    <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
      <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><LockIcon color="secondary"></LockIcon></Grid>
      <Grid item xs={9}><TextField id="Password" label="Password" variant="standard" sx={{ marginTop: 1 }}/></Grid>
    </Grid>
    <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
    <Stack spacing={3} direction="row"></Stack>
    <Grid item xs={3}><Button variant="contained" sx={{ marginTop: 3, width: '25ch' }}>Sign In</Button>
    </Grid>
    <Grid item xs={2}><Link to="/inscription" style={{ color: '#027bce', textDecoration: "none"}}>
    <p>No account yet ? Sign up here</p>
    </Link>
    </Grid>
    </Grid>
    </Grid>
    </Grid>
    </div>
        </>
    )
}