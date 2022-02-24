import { gql, useMutation } from '@apollo/client';
import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import Header from '../../components/Shared/Header/Header';
import './ProjectCreationPage.scss';
import PersonIcon from '@mui/icons-material/Person';
import TimerIcon from '@mui/icons-material/Timer';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';


function ProjectCreationPage() : JSX.Element {

  return (
    <>
    <Header></Header>
<Box sx={{ width: '60%', backgroundColor: '#027bce', borderRadius: '5px'}} id='project-creation-box'>
    <Grid container spacing={4} direction="column" justifyContent="center" alignItems="center">
    <Grid item spacing={4}>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><FolderOpenIcon color="secondary"></FolderOpenIcon></Grid>
    <Grid item xs={10} ><TextField id="name" label="Project Title" variant="standard"/></Grid>
  </Grid>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50,marginTop: 25}} ><TimerIcon color="secondary"></TimerIcon></Grid>
    <Grid item xs={10}><TextField id="timeEstimation" label="Initial Time Estimee" variant="standard" sx={{ marginTop: 1 }} /></Grid>
    </Grid>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><PersonIcon color="secondary"></PersonIcon></Grid>
    <Grid item xs={10}><TextField id="Project Members" label="Project Owner" variant="standard" sx={{ marginTop: 1 }}/></Grid>
  </Grid>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><PersonIcon color="secondary"></PersonIcon></Grid>
    <Grid item xs={10}><TextField id="Project Members" label="Project Member" variant="standard" sx={{ marginTop: 1 }}/></Grid>
  </Grid>
  <Grid container direction="row" spacing={10} justifyContent="center" alignItems="center">
    <Grid item xs={3} style={{marginRight:-50, marginTop:25}} ><PersonIcon color="secondary"></PersonIcon></Grid>
    <Grid item xs={10}><TextField id="Project Members" label="Project Member" variant="standard" sx={{ marginTop: 1}}/></Grid>
  </Grid>
  </Grid>
  </Grid>
  <Stack spacing={2} direction="row"></Stack>
  <Button variant="contained" sx={{ marginTop: 3, width: '25ch' }} id="button-add-member" > ADD MORE MEMBERS</Button>
  </Box>

  <Button  variant="contained" sx={{ marginTop: 3, width: '25ch' }} id="button-confirm-creation">CONFIRM CREATION</Button>
  </>
  )
} 

export default ProjectCreationPage;