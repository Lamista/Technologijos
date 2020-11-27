import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/samsung.jpg'

const ProductDetailsComponent = ({ id, title, image, description, price, quantity }) => {
    return (
        <div>
            <div className="media">
                <img className="align-self-start mr-3" src={img} alt={title} style={{
                    height: '25rem'
                }} />
                <div className="media-body">
                    <h5 className="mt-0">{title}</h5>
                    <p>{description}</p>
                    <p>{price}€</p>
                    <p>{quantity}</p>
                </div>
            </div>
            <div className='row'>
                <button className="btn btn-primary mr-1">+</button>
                <button className="btn btn-primary mr-1">-</button>
                <Link to={'/'} className="btn btn-secondary">Back</Link>
            </div>
        </div>

    )


}

export default ProductDetailsComponent;