import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './index.css';
import AuthService from './lib/api/authService';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
