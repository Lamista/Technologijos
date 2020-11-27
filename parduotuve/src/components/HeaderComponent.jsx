import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to='/'>Home</Link> |&nbsp;
        <Link to='/products'>Products</Link> |&nbsp;
        <Link to={`/products/${127}`}>Product by no</Link> |&nbsp;
        <Link to={`/admin/products/new`}>Create new product (admin)</Link> |&nbsp;
        <Link to={`/admin/products/${127}`}>Update product by no (admin)</Link> |&nbsp;
        <Link to='/help'>help</Link> |&nbsp;
        <Link to='/non-existant'>Non Existant</Link>
    </div>
)

export default Header;