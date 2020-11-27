import React from 'react'
import { NavLink } from 'react-router-dom';
import CartInfo from './CartInfoComponent'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
            <div className='container'>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`/admin/products`}>Admin</NavLink>
                    </li>
                    <li className="nav-item">
                        <input className="form-control mr-sm-2" type="text" placeholder="Username" />
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0 nav-item">
                    <NavLink className='nav-link' to={'/cart'} >
                        <CartInfo />
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;