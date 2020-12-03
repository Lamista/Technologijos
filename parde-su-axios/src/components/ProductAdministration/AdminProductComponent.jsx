import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

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
            <td><Link to={`/admin/products/${id}`}>{title} <FontAwesomeIcon icon={faPencilAlt} /></Link></td>
        </tr>
    </tbody>
);

export default AdminProductComponent