import logo from './logo.svg';
import React, { Component } from 'react';
import Papildomas from './Papildomas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Papildomas
          name={"Vardas"}
          surname={"Pavarde"}
        />
      </div>
    )
  }
}

export default App;
