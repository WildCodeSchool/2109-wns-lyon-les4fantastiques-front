import React from 'react';
import { Form } from './components/Form/Form';
import EasyTicketLogo from './easy-ticket-logo.svg';
import './App.scss';

function App() {
  return (
    <>
    <img src={EasyTicketLogo} id="EasyTicketLogo" alt="EasyTicketLogo" />
    <Form />
    </>
  );
}

export default App;
