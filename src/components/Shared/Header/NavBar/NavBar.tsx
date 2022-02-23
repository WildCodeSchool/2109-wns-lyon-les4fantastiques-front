import React from 'react';
import './NavBar.scss';
import { Tabs, Box, Tab } from '@mui/material';

function NavBar() : JSX.Element {  
  const [value, setValue] = React.useState('one');

  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };
      
	return(
    <div className='navbar-container'>
    <Box sx={{ 
      width: '100%'}}>
    <Tabs
      value={value}
      onChange={handleChange}
    >
      <Tab
        value="tasksList"
        label="TasksList" href="/tasks" 
        sx={{marginLeft: 12}}
      />
      <Tab value="projectsList" label="ProjectsList" href="/projects"/>
      <Tab value="usersList" label="Users" href="/users"/>
    </Tabs>
  </Box>
  </div>

	);
}

export default NavBar;