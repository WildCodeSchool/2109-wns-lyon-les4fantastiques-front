import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import EasyTicketLogo from "./assets/images/easy-ticket-logo.svg";

import "./App.scss";
import GuardedRoute from "./components/Shared/GuardedRoute/GuardedRoute";

import { InscriptionPage } from "./Pages/InscriptionPage/InscriptionPage";
import { ConnexionPage } from "./Pages/ConnexionPage/ConnexionPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Header from "./components/Shared/Header/Header";

import "./App.scss";
import ProjectsListPage from "./Pages/Projects/ProjectsListPage/ProjectsListPage";
import TasksListPage from "./Pages/Tickets/TasksListPage/TasksListPage";
import UsersManagementPage from "./Pages/UsersManagementPage/UsersManagementPage";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { myTheme } from "./Theme";
import ProjectCreationPage from "./Pages/Projects/ProjectCreationPage/ProjectCreationPage";
import TaskCreationPage from "./Pages/Tickets/TaskCreationPage/TaskCreationPage";
import ProjectDetailsPage from "./Pages/Projects/ProjectDetailsPage/ProjectDetailsPage";
import TaskDetailsPage from "./Pages/Tickets/TaskDetailsPage/TaskDetailsPage";

function App() {
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
              <Route path="/users" element={<UsersManagementPage />} />
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
              <Route path="/create/project" element={<ProjectCreationPage />} />
              <Route path="/create/task" element={<TaskCreationPage />} />
              <Route path="/project/:id" element={<ProjectDetailsPage />} />
              <Route path="/ticket/:id" element={<TaskDetailsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
