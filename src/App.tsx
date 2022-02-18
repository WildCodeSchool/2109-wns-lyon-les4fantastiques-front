import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { InscriptionPage } from './components/InscriptionPage/InscriptionPage';
import { ConnexionPage } from './components/ConnexionPage/ConnexionPage';
import EasyTicketLogo from './assets/images/easy-ticket-logo.svg';
import WelcomePage from './components/WelcomePage/WelcomePage';
import './App.scss';

function App() {
  return (
    <>
    <img src={EasyTicketLogo} id="EasyTicketLogo" alt="EasyTicketLogo" />
    <Router>
      <Routes>
      <Route path="/" element={<WelcomePage/>} />
      <Route path="/inscription" element={<InscriptionPage/>} />
      <Route path="/connexion" element={<ConnexionPage/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
