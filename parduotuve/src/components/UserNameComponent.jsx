import React, { Component } from 'react';


class UserName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    handleUpdate = (name) => {
        // const name = Math.floor(Math.random * 1000)
        this.setState({ username: name });
        console.log("Lala");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleUpdate}>Update me {this.state.username}</button>
            </div>
        )
    }
}

export default UserName