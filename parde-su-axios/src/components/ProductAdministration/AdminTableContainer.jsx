import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AdminProductComponent from './AdminProductComponent';

import img from '../../images/samsung.jpg'
import defaultImg from '../../images/default.png'


class AdminListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        axios
            .get('https://itpro2017.herokuapp.com/api/products')
            .then((prod) => {
                this.setState({ products: prod });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { data } = this.state.products;
        if (data) {
            console.log(data);
            return (
                <div className='container mt-5'>
                    <Link to={`/admin/products/new`} className='btn btn-primary mb-5'>
                        Add new product
                    </Link>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Image</th>
                                <th scope='col'>Title</th>
                            </tr>
                        </thead>
                        {data.map(({ id, image, ...otherProps }) => (
                            <AdminProductComponent
                                key={id}
                                id={id}
                                imgSrc={image === '/samsung.jpg' ? img : image.substring(0, 5) === 'https' ? image : defaultImg}
                                {...otherProps}
                            />
                        ))}
                    </table>
                </div>
            );
        } else {
            return (
                <div className='d-flex justify-content-center'>
                    <div className='spinner-border' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                </div>
            );
        }
    }
}

export default AdminListContainer