import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import reportWebVitals from './reportWebVitals';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CardList from './containers/CardListContainer';
import ProductAdministrationFormContainer from './containers/ProductAdministrationFormContainer';
import NoMatch from './components/NoMatchComponent'
import DemonstruotiNavigacija from './components/DemonstruotiNavigacijaComponent'
import ServicesContext from './ServicesContext'
import UserService from './UserService'
import ProductDetailsContainer from './containers/ProductDetailsContainer';

var userService = new UserService()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ServicesContext.Provider value={{ userService: userService }}>
        <AppContainer>
          <Switch>
            <Route exact path='/' component={CardList} />
            <Route path="/products/:id"
              component={ProductDetailsContainer} />
            <Route path="/products" component={CardList} />
            <Route path="/admin/products/new" component={ProductAdministrationFormContainer} />
            <Route path="/admin/products/:id" component={ProductAdministrationFormContainer} />
            <Route path="/help" component={DemonstruotiNavigacija} />
            <Route path="*" component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </AppContainer>
      </ServicesContext.Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
