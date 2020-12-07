import React from 'react';
import { Link } from 'react-router-dom';

import samsungImg from '../../images/samsung.jpg';
import defaultImg from '../../images/default.png';

const ProductDetailsComponent = ({ title, image, description, price, quantity, currentUser, addToCart }) => {
    let imgSrc = image === '/samsung.jpg' ? samsungImg : image.substring(0, 5) === 'https' ? image : defaultImg;
    return (
        <div>
            <div className='media'>
                <img className='align-self-start mr-3' src={imgSrc} alt={title} style={{
                    height: '25rem'
                }} />
                <div className='media-body mt-3'>
                    <h5 className='mt-0'>{title}</h5>
                    <p>{description}</p>
                    <p>Kaina: {Math.round(price * 100) / 100}€</p>
                    <p>Kiekis: {quantity} vnt.</p>
                </div>
            </div>
            <div className='row ml-5 mt-3'>
                {currentUser !== undefined ? <button className='btn btn-primary mr-1' onClick={addToCart}>Add to cart</button> : <div></div>}
                <Link to={'/'} className='btn btn-secondary'>Back</Link>
            </div>
        </div>

    )
}

export default ProductDetailsComponent;