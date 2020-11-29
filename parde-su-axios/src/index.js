import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ServicesContext from './ServicesContext'
import UserService from './services/UserService'
import UserProductsService from './services/UserProductsService'

document.title = "E-shop";

let userService = new UserService()
let userProductsService = new UserProductsService()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ServicesContext.Provider value={{ userService, userProductsService }}>
        <App />
      </ServicesContext.Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();