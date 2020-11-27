import React, { Component } from 'react'
import ProductAdministrationFormComponent from '../components/ProductAdministrationFormComponent'

class ProductAdministrationFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            productImage: "",
            description: "",
            price: "",
            quantity: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.productTitle.value);
        console.log(e.target.productImage.value);
        console.log(e.target.productDescription.value);
        console.log(e.target.productPrice.value);
        console.log(e.target.productQuantity.value);
    }

    render() {
        return (
            <ProductAdministrationFormComponent handleSubmit={this.handleSubmit} />
        )
    }
}

export default ProductAdministrationFormContainer;
