import React from 'react';
import { Component } from 'react';
import CardComponent from '../components/CardComponent';
import Data from '../Data.json';

class ProductDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            id: props.match.params.id
        }
    }

    componentDidMount() {
        this.setState({ product: Data.filter(product => product.id = this.state.id) })
    }

    render() {
        if (this.state.product !== null) {
            return (<CardComponent
                id={this.state.product.id}
                title={this.state.product.title}
                imageUrl={this.state.product.imageUrl}
                description={this.state.product.description}
                price={this.state.product.price}
                quantity={this.state.product.quantity}
            />)
        } else {
            return (<div>Loading...</div>)
        }
    }
}

export default ProductDetailsContainer