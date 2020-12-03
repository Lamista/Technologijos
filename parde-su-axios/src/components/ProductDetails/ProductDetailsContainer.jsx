import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import ServicesContext from '../../context/ServicesContext';

import ProductDetailsComponent from './ProductDetailsComponent';


const ProductDetailsContainer = (props) => {

    const { userService } = useContext(ServicesContext);
    const [currentUser, setCurrentUser] = useState(userService.getCurrentUser());
    const [product, setProduct] = useState(null);


    userService.updateCurrentUser = () => setCurrentUser(userService.getCurrentUser());

    useEffect(() => {
        axios
            .get(`https://itpro2017.herokuapp.com/api/products/${props.match.params.id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [props.match.params.id]);


    const addToCart = () => {
        axios
            .post(`https://itpro2017.herokuapp.com/api/users/${currentUser}/cart-products`,
                {
                    'id': product.id,
                    'image': product.image || '',
                    'title': product.title
                })
            .then(res => {
                userService.setCartCount(res.data.length);
                userService.updateCartCount();
            })
            .catch(err => console.log(err))
    }

    if (product !== null) {
        const { id, image, title, ...otherProps } = product;
        console.log(id)
        return (
            <div className='container'>
                <div key={id}>
                    <ProductDetailsComponent
                        id={id}
                        currentUser={currentUser}
                        userService={userService}
                        image={image}
                        addToCart={addToCart}
                        {...otherProps}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status'>
                    <span className='sr-only'>Loading...</span>
                </div>
            </div>
        );
    }
}

export default ProductDetailsContainer;