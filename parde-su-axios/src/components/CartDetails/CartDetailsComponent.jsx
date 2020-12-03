import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import ServicesContext from '../../context/ServicesContext';

import img from '../../images/samsung.jpg';
import defaultImg from '../../images/default.png';

const CartDetailsComponent = () => {
    const { userService } = useContext(ServicesContext);

    const [userProducts, setUserProducts] = useState([]);
    const [currentUser, setCurrentUser] = useState(userService.getCurrentUser());

    userService.updateCurrentUser = () => setCurrentUser(userService.getCurrentUser());

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
                userService.setCartCount(res.data.length);
                userService.updateCartCount()
            })
    }

    console.log(userProducts)
    if (userProducts.length > 0) {
        return (
            <div className='container mt-5'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Image</th>
                            <th scope='col'>Title</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    {userProducts.map(({ id, image, title }) => (
                        <tbody key={id}>
                            <tr>
                                <td>
                                    <img
                                        src={image === '/samsung.jpg' ? img : defaultImg}
                                        className='card-img-top'
                                        style={{ width: 50, height: 50 }}
                                        alt={title}
                                    />
                                </td>
                                <td>{title}</td>
                                <td><button className='btn btn-danger' onClick={deleteFromCart} value={id}>Remove from cart</button></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        );
    } else {
        return (
            <div className='d-flex justify-content-center'>
                {currentUser !== undefined ? <h1>No products selected</h1> : <h1>Please login</h1>}
            </div>
        );
    }
}

export default CartDetailsComponent;