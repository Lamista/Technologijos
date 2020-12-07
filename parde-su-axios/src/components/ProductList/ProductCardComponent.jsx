import React from 'react';
import { Link } from 'react-router-dom';

import samsungImg from '../../images/samsung.jpg';
import defaultImg from '../../images/default.png';

import '../../styles/Card.css';

const ProductCardComponent = ({ id, title, image, description, price, quantity }) => {
    let imgSrc = image === '/samsung.jpg' ? samsungImg : image.substring(0, 5) === 'https' ? image : defaultImg;
    return (
        <div className='col mb-4'>
            <div className='card h-100'>
                <img src={imgSrc} className='card-img-top' alt={title} />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{description}</p>
                    <div className='row'>
                        <div className='col'>
                            <p>Kaina: {Math.round(price * 100) / 100}€</p>
                        </div>
                        <div className='col'>
                            <p>Kiekis: {quantity}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/products/${id}`} className='btn btn-primary'>Details</Link>
            </div>
        </div >
    )
}

export default ProductCardComponent;