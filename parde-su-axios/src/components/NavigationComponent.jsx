import React from 'react'
import { Link } from 'react-router-dom';
import CartInfo from './CartInfoComponent'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div className='container'>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/admin/products/new`}>Admin</Link>
                            </li>
                            <li className="nav-item">
                                <input className="form-control mr-sm-2" type="text" placeholder="Username" />
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <CartInfo />
                        </form>
                    </div>
                </div>
            </nav>
            <div>
                <Link to='/products'>Products</Link> |&nbsp;
            <Link to={`/products/${127}`}>Product by no</Link> |&nbsp;
            <Link to={`/admin/products/${127}`}>Update product by no (admin)</Link> |&nbsp;
            <Link to='/help'>help</Link> |&nbsp;
            <Link to='/non-existant'>Non Existant</Link>
            </div>
        </div >
    )
}

export default Navigation;