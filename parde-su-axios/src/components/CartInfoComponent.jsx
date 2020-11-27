import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartInfo = () => (
    <div>
        <span><FontAwesomeIcon icon={faShoppingCart} /> 0 items </span>
    </div>
)

export default CartInfo