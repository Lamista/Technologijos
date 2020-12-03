import React from 'react';

import samsungImg from '../../images/samsung.jpg';
import defaultImg from '../../images/default.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartDetailsComponent = ({ userProducts, currentUser, deleteFromCart }) => {

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
                                        src={image === '/samsung.jpg' ? samsungImg : image.substring(0, 5) === 'https' ? image : defaultImg}
                                        className='card-img-top'
                                        style={{ width: 50, height: 50 }}
                                        alt={title}
                                    />
                                </td>
                                <td>{title}</td>
                                <td><button className='btn btn-danger' onClick={deleteFromCart} value={id}>Remove from cart <FontAwesomeIcon icon={faTrashAlt} /></button></td>
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