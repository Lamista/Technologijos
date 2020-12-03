import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ServicesContext from '../../context/ServicesContext';
import CartSummaryContainer from '../CartSummary/CartSummaryContainer';
import LoginContainer from '../Login/LoginContainer';

const Navigation = () => {
    const { userService } = useContext(ServicesContext);
    const [currentUser, setCurrentUser] = useState(userService.getCurrentUser());
    userService.updateCurrentUser = () => setCurrentUser(userService.getCurrentUser());
    return (
        <nav className='navbar navbar-light navbar-expand-md' style={{ backgroundColor: '#e3f2fd' }}>
            <div className='container'>
                <ul className='nav navbar-nav'>
                    <NavLink className='nav-link' exact to='/'>Home</NavLink>
                    <NavLink className='nav-link' to={`/admin/products`}>Admin</NavLink>
                    <LoginContainer />
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                    <NavLink className='nav-link' to={`/users/${currentUser}/cart-products`}>
                        <CartSummaryContainer />
                    </NavLink>
                </ul>
            </div>
        </nav >
    )
}

export default Navigation;