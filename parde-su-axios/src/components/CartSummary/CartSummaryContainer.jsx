import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import ServicesContext from '../../context/ServicesContext';

import CartSummaryComponent from './CartSummaryComponent';

const CartSummaryContainer = () => {
    const { userService } = useContext(ServicesContext);

    const [currentUser, setCurrentUser] = useState(userService.getCurrentUser());
    const [cartCount, setCartCount] = useState(userService.getCartCount());

    userService.updateCurrentUser = () => setCurrentUser(userService.getCurrentUser());
    userService.updateCartCount = () => setCartCount(userService.getCartCount());

    useEffect(() => {
        if (currentUser !== undefined) {
            axios
                .get(`https://itpro2017.herokuapp.com/api/users/${currentUser}/cart-products`)
                .then(res => { userService.setCartCount(res.data.length()); userService.updateCartCount(); })
                .catch(err => console.log(err))
        }
    }, [currentUser, cartCount, userService])

    return (
        <CartSummaryComponent
            cartCount={cartCount}
        />
    )
}

export default CartSummaryContainer;