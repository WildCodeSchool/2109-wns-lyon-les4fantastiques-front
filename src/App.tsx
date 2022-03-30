import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { InscriptionPage } from "./Pages/InscriptionPage/InscriptionPage";
import { ConnexionPage } from "./Pages/ConnexionPage/ConnexionPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Header from "./components/Shared/Header/Header";

import EasyTicketLogo from "./assets/images/easy-ticket-logo.svg";

import "./App.scss";
import ProjectsListPage from "./Pages/ProjectsListPage/ProjectsListPage";
import TasksListPage from "./Pages/TasksListPage/TasksListPage";
import UsersManagementPage from "./Pages/UsersManagementPage/UsersManagementPage";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { myTheme } from "./Theme";
import ProjectCreationPage from "./Pages/ProjectCreationPage/ProjectCreationPage";
import TaskCreationPage from "./Pages/TaskCreationPage/TaskCreationPage";
import { usersContext } from "./contexts/Users/UsersProvider";
import GuardedRoute from "./components/Shared/GuardedRoute/GuardedRoute";

function App() {
  const { currentUser, getCurrentUser } = useContext(usersContext);

  useEffect(() => {
    (async () => {
      if (!currentUser && !!localStorage.getItem("isLoggedIn")) {
        await getCurrentUser();
      }
    })();
  }, [currentUser, getCurrentUser]);

  return (
    <>
      <StyledEngineProvider>
        <ThemeProvider theme={myTheme}>
          <CssBaseline />
          <img src={EasyTicketLogo} id="EasyTicketLogo" alt="EasyTicketLogo" />
          <Router>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/inscription" element={<InscriptionPage />} />
              <Route path="/connexion" element={<ConnexionPage />} />
              <Route path="/header" element={<Header />} />
              <Route path="/tasks" element={<TasksListPage />} />
              <Route
                path="/projects"
                element={
                  <GuardedRoute>
                    <ProjectsListPage />
                  </GuardedRoute>
                }
              />
              <Route path="/users" element={<UsersManagementPage />} />
              <Route path="/create/project" element={<ProjectCreationPage />} />
              <Route path="/create/task" element={<TaskCreationPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
