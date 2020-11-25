import React, { Component } from 'react'

export class ProductAdministrationComponent extends Component {
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
            <form className="container my-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productTitle">Title</label>
                    <input type="text" className="form-control" id="productTitle" name="productTitle" />
                </div>
                <div className="form-group">
                    <label htmlFor="productImage">Image</label>
                    <select className="form-control" id="productImage" name="productImage" >
                        <option value="url1">White</option>
                        <option value="url2">Black</option>
                        <option value="url3">Grey</option>
                        <option value="url4">Pink</option>
                        <option value="url5">Blue</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Description</label>
                    <textarea className="form-control" id="productDescription" rows="3" name="productDescription"></textarea>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="productPrice">Price</label>
                        <input type="text" className="form-control" id="productPrice" name="productPrice" />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="productQuantity">Quantity</label>
                        <input type="text" className="form-control" id="productQuantity" name="productQuantity" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
}

export default ProductAdministrationComponent;
