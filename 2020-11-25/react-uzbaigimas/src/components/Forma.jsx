import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Forma extends Component {
    constructor() { super(); this.state = { value: '' }; }
    handleChange = (event) => this.setState({ value: event.target.value });
    handleSubmit = (event) => {
        this.setState({ value: 'reset after submit' });
        event.preventDefault();
    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            Name ({this.state.value}):<br />
            <input type="text" value={this.state.value}
                onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>);
    }
}

export default Forma;