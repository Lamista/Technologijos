import React, { Component } from 'react'

export class IntervalinisKomponentas extends Component {
    constructor() {
        super();
        this.state = {
            time: 5
        }
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.setState({ time: this.state.time > 0 ? this.state.time - 1 : 0 }, this.state.time === 0 ? clearInterval(intervalId) : () => { })
        }, 1000);
    }

    render() {
        return (
            <div className="app" style={{ backgroundColor: this.state.time > 0 ? "grey" : "red" }}><h1>didMount: {this.state.time} </h1> </div>
        )

    }
}

export default IntervalinisKomponentas
