import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../AppConfig';

import ProductCardComponent from './ProductCardComponent';

const ProductListComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, []);

    if (products.length > 0) {
        return (
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                    {products.map(({ id, ...otherProps }) => {
                        return (
                            <ProductCardComponent
                                key={id}
                                id={id}
                                {...otherProps}
                            />
                        )
                    })}
                </div>
            </div >
        )
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

export default ProductListComponent;