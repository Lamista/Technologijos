import React, { Component } from 'react';
import Papildomas from './Papildomas';
import Forma from './components/Forma';
import ProductAdministrationComponent from './components/ProductAdministrationComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 5,
      intervalId: null,
      backgroundColor: "grey"
    }
  }

  componentDidMount() {
    let intervalId = setInterval(() => {
      this.setState(
        this.state.time > 0
          ? { time: this.state.time - 1 }
          : (
            clearInterval(intervalId),
            this.setState({ backgroundColor: "red" }
            )
          ))
    }, 1000)
  }

  render() {
    return (
      <div>
        <div className="app" style={{
          backgroundColor: this.state.backgroundColor
        }}>
          <Papildomas
            name={"Vardas"}
            surname={"Pavarde"}
          />
          <p>{this.state.time}</p>
        </div>
        <Forma />
        <ProductAdministrationComponent />
      </div>
    )
  }
}

export default App;
