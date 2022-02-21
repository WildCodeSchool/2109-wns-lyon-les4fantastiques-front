import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { InscriptionPage } from './components/Pages/InscriptionPage/InscriptionPage';
import { ConnexionPage } from './components/Pages/ConnexionPage/ConnexionPage';
import WelcomePage from './components/Pages/WelcomePage/WelcomePage';
import Header from './components/Shared/Header/Header';

import EasyTicketLogo from './assets/images/easy-ticket-logo.svg';
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
      <Route path="/header" element={Header}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
