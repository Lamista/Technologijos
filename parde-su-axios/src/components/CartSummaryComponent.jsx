import React, { useContext, useEffect } from 'react';
import axios from 'axios'
import ServicesContext from '../ServicesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartSummaryComponent = () => {
    const { userService, userProductsService } = useContext(ServicesContext);

    useEffect(() => {
        axios
            .get(`/users/${userService.username}/cart-products`)
            .then(res => userProductsService.productCount = res.data.legth())
            .catch(err => console.log(err))
    })

    return (
        <div>
            <ServicesContext.Consumer>
                {({ userProductsService }) => <h2><FontAwesomeIcon icon={faShoppingCart} /> {userProductsService.productCount}</h2>}
            </ServicesContext.Consumer>
        </div>
    )
}

export default CartSummaryComponent