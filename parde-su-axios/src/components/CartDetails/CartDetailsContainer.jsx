import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import ServicesContext from '../../context/ServicesContext';

import CartDetailsComponent from './CartDetailsComponent';

const CartDetailsContainer = () => {
    const { userCartService } = useContext(ServicesContext);

    const [userProducts, setUserProducts] = useState([]);
    const [currentUser, setCurrentUser] = useState(userCartService.getCurrentUser());

    userCartService.updateCurrentUser = () => setCurrentUser(userCartService.getCurrentUser());

    useEffect(() => {
        axios
            .get(`https://itpro2017.herokuapp.com/api/users/${currentUser}/cart-products`)
            .then(res => {
                setUserProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [currentUser])

    const deleteFromCart = (e) => {
        axios
            .delete(`https://itpro2017.herokuapp.com/api/users/${currentUser}/cart-products/${e.target.value}`)
            .then((res) => {
                setUserProducts(res.data);
                userCartService.setCartCount(res.data.length);
                userCartService.updateCartCount();
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