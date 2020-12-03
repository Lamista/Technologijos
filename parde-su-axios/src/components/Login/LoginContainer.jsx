import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';

import ServicesContext from '../../context/ServicesContext.js';

import LoginComponent from './LoginComponent';

const LoginContainer = () => {
    const { userService } = useContext(ServicesContext);
    const history = useHistory();

    const [currentUser, setCurrentUser] = useState(userService.getCurrentUser());
    const [username, setUsername] = useState('');

    userService.updateCurrentUser = () => setCurrentUser(userService.getCurrentUser(), console.log(userService.getCurrentUser()));

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const name = e.target.username.value;
        userService.setCurrentUser(name);
        userService.updateCurrentUser();
        setUsername('');
        axios
            .get(`https://itpro2017.herokuapp.com/api/users/${name}/cart-products`)
            .then(res => {
                userService.setCartCount(res.data.length);
                userService.updateCartCount();
            })
            .catch(err => console.log(err))

        history.push('/');
    }
    const handleLogout = (e) => {
        e.preventDefault();
        userService.setCurrentUser(undefined);
        setCurrentUser(undefined);
        userService.updateCurrentUser();
        userService.setCartCount(0);
        userService.updateCartCount();

        history.push('/');

    }
    return (
        <LoginComponent
            handleChange={handleChange}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            currentUser={currentUser}
            username={username}
        />
    )
}

export default LoginContainer;