import React, { Component } from 'react';

class Papildomas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            surname: this.props.surname
        }

        console.log("konstruktorius: " + this.state.name);
    }

    componentDidMount() {
        console.log("did mount: " + this.state.name);
        this.setState({ name: this.state.name + "***" })
    }

    componentDidUpdate() {
        console.log("did update: " + this.state.name);
    }

    render() {
        console.log("render: " + this.state.name);
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.surname}</h1>
            </div>
        )
    }
}

export default Papildomas;
