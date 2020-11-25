import React, { Component } from 'react'

export class ProductAdministrationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    render() {
        return (
            <form className="container my-5">
                <div className="form-group">
                    <label for="productTitle">Title</label>
                    <input type="text" className="form-control" id="productTitle" />
                </div>
                <div className="form-group">
                    <label for="productImage">Image</label>
                    <select className="form-control" id="productImage">
                        <option value="url1">White</option>
                        <option value="url2">Black</option>
                        <option value="url3">Grey</option>
                        <option value="url4">Pink</option>
                        <option value="url5">Blue</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="productDescription">Description</label>
                    <textarea className="form-control" id="productDescription" rows="3"></textarea>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label for="productPrice">Price</label>
                        <input type="text" className="form-control" id="productPrice" />
                    </div>
                    <div className="form-group col-6">
                        <label for="productQuantity">Quantity</label>
                        <input type="text" className="form-control" id="productQuantity" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        )
    }
}

export default ProductAdministrationComponent;
