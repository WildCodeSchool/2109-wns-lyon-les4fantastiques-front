import { Grid } from '@mui/material';
import Header from '../../components/Shared/Header/Header';
import './ProjectDetailsPage.scss';
import PersonIcon from '@mui/icons-material/Person';
import TimerIcon from '@mui/icons-material/Timer';
import PercentIcon from '@mui/icons-material/Percent';


function ProjectDetailsPage() : JSX.Element {
    return (
        <>
        <Header></Header>
        <Grid container spacing={2} direction="row" style={{margin:"2%"}}>
        <Grid item xs={4}>
        <Grid container direction="column" spacing={2}>
        <Grid item xs={2}>
            <h1 style={{ color: '#ef476f'}}><span style={{ color: 'white'}}>Product</span> Owner</h1>
      <Grid container direction="row" spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={4} style={{marginRight:-50, marginTop:25}} ><PersonIcon style={{ color: '#ef476f'}}></PersonIcon></Grid>
        <Grid item xs={8} ><p>Jane Doe</p></Grid>
      </Grid>
      </Grid>
      
      

      <Grid item xs={2}>
            <h1 style={{ color: '#06d6a0'}}><span style={{ color: 'white'}}>Project</span> Members</h1>
      <Grid container direction="row" spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={4} style={{marginRight:-50, marginTop:25}} ><PersonIcon style={{ color: '#06d6a0'}}></PersonIcon></Grid>
        <Grid item xs={8} ><p>Jane Doe</p></Grid>
        <Grid item xs={4} style={{marginRight:-50, marginTop:25}} ><PersonIcon style={{ color: '#06d6a0'}}></PersonIcon></Grid>
        <Grid item xs={8} ><p>Jane Doe</p></Grid>
      </Grid>
      </Grid>
      </Grid>
      </Grid>

      <Grid item xs={6}>
            <h1 style={{ color: '#ffd166'}}><span style={{ color: 'white'}}>Project</span> Details</h1>
      <Grid container direction="row" spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={2} ><TimerIcon style={{ color: '#ffd166'}}></TimerIcon></Grid>
        <Grid item xs={8} ><p>Initial Time Spent Estimee</p></Grid>
        <Grid item xs={2} ><p>25 days</p></Grid> 
        <Grid item xs={2}  ><TimerIcon style={{ color: '#ffd166'}}></TimerIcon></Grid>
        <Grid item xs={8} ><p>Total Time Spent</p></Grid>
        <Grid item xs={2} ><p>20 days</p></Grid> 
        <Grid item xs={2} ><PercentIcon style={{ color: '#ffd166'}}></PercentIcon></Grid>
        <Grid item xs={8} ><p>Percentage Time Spent</p></Grid>
        <Grid item xs={2} ><p>80 %</p></Grid> 
        <Grid item xs={2}  ><PercentIcon style={{ color: '#ffd166'}}></PercentIcon></Grid>
        <Grid item xs={8} ><p>Percentage Tasks Accomplished</p></Grid>
        <Grid item xs={2} ><p>80 %</p></Grid> 
      </Grid>
      </Grid>

      </Grid>
        </>
      )
}

export default ProjectDetailsPage;