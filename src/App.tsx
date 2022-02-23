import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { InscriptionPage } from './Pages/InscriptionPage/InscriptionPage';
import { ConnexionPage } from './Pages/ConnexionPage/ConnexionPage';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import Header from './components/Shared/Header/Header';

import EasyTicketLogo from './assets/images/easy-ticket-logo.svg';

import './App.scss';
import ProjectsListPage from './Pages/ProjectsListPage/ProjectsListPage';
import TasksListPage from './Pages/TasksListPage/TasksListPage';
import UsersManagementPage from './Pages/UsersManagementPage/UsersManagementPage';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


const myTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#027bce",
    },
  },
  typography: {
    fontFamily: "Roboto-Black",
  },
});

function App() {

  return (
    <>
    <StyledEngineProvider>
    <ThemeProvider theme={myTheme}>
    <CssBaseline />
    <img src={EasyTicketLogo} id="EasyTicketLogo" alt="EasyTicketLogo" />
    <Router>
      <Routes>
      <Route path="/" element={<WelcomePage/>} />
      <Route path="/inscription" element={<InscriptionPage/>} />
      <Route path="/connexion" element={<ConnexionPage/>} />
      <Route path="/header" element={<Header/>}></Route>
      <Route path="/tasks" element={<TasksListPage/>}></Route>
      <Route path="/projects" element={<ProjectsListPage/>}></Route>
      <Route path="/users" element={<UsersManagementPage/>}></Route>
    </Routes>
    </Router>
    </ThemeProvider>
    </StyledEngineProvider>
    </>
  );
}

export default App;

