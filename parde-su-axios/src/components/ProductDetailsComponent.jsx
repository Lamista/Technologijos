import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/samsung.jpg'

const ProductDetailsComponent = ({ id, title, image, description, price, quantity }) => {
    return (
        <div className="card px-1" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="row">
                    <div className="col">
                        <p>Kaina: {price}€</p>
                    </div>
                    <div className="col">
                        <p>Kiekis: {quantity}</p>
                    </div>
                </div>
                <button className="btn btn-primary mr-1">+</button>
                <button className="btn btn-primary mr-1">-</button>
                <Link to={'/'} className="btn btn-secondary">Back</Link>
            </div>
        </div >
    )
}

export default ProductDetailsComponent;