import React from 'react';

import { Router } from 'react-router-dom';
import { AuthProvider } from '../src/contexts/auth';
import Routes from '../src/routes/index';
import History from './history';

import './assets/styles/global.css';



function App() {
  return (
    <AuthProvider>
      <Router history={History}>
        <Routes />
      </Router> 
    </AuthProvider>
  );
}

export default App;
