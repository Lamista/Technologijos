import React from 'react';
import './App.css';
import Header from './components/HeaderComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (<div>
    <Header />
    {props.children}
  </div>);
};

export default App;
