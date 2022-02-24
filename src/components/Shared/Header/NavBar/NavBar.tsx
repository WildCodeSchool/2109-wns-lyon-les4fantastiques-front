import React from 'react';
import './NavBar.scss';
import { Tabs, Box, Tab } from '@mui/material';

function NavBar() : JSX.Element {  
  const [value, setValue] = React.useState('');

  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };
      
	return(
    <div className='navbar-container'>
    <Box sx={{ 
      width: '100%', marginLeft: 6}}>
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
    >
      <Tab
        value="tasksList"
        label="TasksList" href="/tasks"
        className="nav--item"
      />
      <Tab value="projectsList" label="ProjectsList" href="/projects" className="nav--item"/>
      <Tab value="usersList" label="Users" href="/users" className="nav--item"/>
    </Tabs>
  </Box>
  </div>

	);
}

export default NavBar;