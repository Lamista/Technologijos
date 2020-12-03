import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ServicesContext from './context/ServicesContext'
import UserService from './services/UserService'

import App from './App';

import './index.css';

document.title = 'E-shop';

const userService = new UserService();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ServicesContext.Provider value={{ userService }}>
        <App />
      </ServicesContext.Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);