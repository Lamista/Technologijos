import React from 'react';
import './App.css';
import Navigation from './components/NavigationComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContainer = (props) => {
  return (<div>
    <Navigation />
    {props.children}
  </div>);
};

export default AppContainer;
