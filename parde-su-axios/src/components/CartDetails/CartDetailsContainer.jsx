import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../AppConfig';

import ServicesContext from '../../context/ServicesContext';

import CartDetailsComponent from './CartDetailsComponent';

const CartDetailsContainer = () => {
    const { userCartService } = useContext(ServicesContext);

    const [userProducts, setUserProducts] = useState([]);
    const [currentUser, setCurrentUser] = useState(userCartService.getCurrentUser());

    userCartService.updateCurrentUser = () => setCurrentUser(userCartService.getCurrentUser());

    useEffect(() => {
        axios
            .get(`${baseUrl}/api/users/${currentUser}/cart-products`)
            .then(res => {
                setUserProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [currentUser])

    const deleteFromCart = (e) => {
        axios
            .delete(`${baseUrl}/api/users/${currentUser}/cart-products/${e.target.value}`)
            .then(() => {
                axios
                    .get(`${baseUrl}/api/users/${currentUser}/cart-products`)
                    .then((res) => {
                        setUserProducts(res.data);
                        userCartService.setCartCount(res.data.length);
                        userCartService.updateCartCount();
                    })
                    //jei response body javoj iskart grazintu products nereiktu axios
                    // .then((res) => {
                    //     setUserProducts(res.data);
                    //     userCartService.setCartCount(res.data.length);
                    //     userCartService.updateCartCount();
                    // })
                    .catch(err => console.log(err))
            })
    }

    return (
        <CartDetailsComponent
            deleteFromCart={deleteFromCart}
            currentUser={currentUser}
            userProducts={userProducts}
        />
    )
}

export default CartDetailsContainer;