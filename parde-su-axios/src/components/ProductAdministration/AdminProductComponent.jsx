import React from 'react';
import { Link } from 'react-router-dom';

const AdminProductComponent = ({ id, imgSrc, title }) => (
    <tbody>
        <tr>
            <th scope='row'>{id}</th>
            <td>
                <img
                    src={imgSrc}
                    className='card-img-top'
                    style={{ width: 50, height: 50 }}
                    alt={title}
                />
            </td>
            <td><Link to={`/admin/products/${id}`}>{title}</Link></td>
        </tr>
    </tbody>
);

export default AdminProductComponent