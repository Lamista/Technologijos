import React, { Component } from 'react'
import '../styles/Header.css';
import logo from '../logo.svg';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            imgClassName: ""
        }
    }

    render() {
        return (
            <header className="App-header" >
                <img src={logo} className={this.state.imgClassName} alt="logo" style={{ height: "40vmin" }} />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
            </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseOver={() => this.setState({ imgClassName: "App-logo" })}
                    onMouseOut={() => this.setState({ imgClassName: "" })}
                >
                    Learn React
            </a>
            </header >
        )
    }
}
export default Header;