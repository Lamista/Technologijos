import React, { Component } from 'react'
import axios from 'axios'

class UpdateAdminFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            image: "",
            price: "",
            quantity: ""

        }
    }

    componentDidMount() {
        axios
            .get(`https://itpro2017.herokuapp.com/api/products/${this.props.match.params.id}`)
            .then(res => this.setState({
                title: res.data.title,
                description: res.data.description,
                image: res.data.image,
                price: res.data.price,
                quantity: res.data.quantity
            }))
            .catch(err => console.log(err))

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        if (this.state.product !== null) {
            const { title, image, description, price, quantity } = this.state;
            return (
                <div>
                    <form className="container my-5" onSubmit={this.props.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="productTitle">Title</label>
                            <input onChange={this.handleChange} type="text" className="form-control" id="productTitle" name="title" value={title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productImage">Image</label>
                            <input onChange={this.handleChange} type="text" className="form-control" id="productImage" name="image" value={image} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productDescription">Description</label>
                            <textarea onChange={this.handleChange} className="form-control" id="productDescription" rows="3" name="description" value={description}></textarea>
                        </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="productPrice">Price</label>
                                <input onChange={this.handleChange} type="text" className="form-control" id="productPrice" name="price" value={price} />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="productQuantity">Quantity</label>
                                <input onChange={this.handleChange} type="text" className="form-control" id="productQuantity" name="quantity" value={quantity} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div >
            )
        } else {
            return (<div>Loading...</div>)
        }
    }
}

export default UpdateAdminFormComponent
