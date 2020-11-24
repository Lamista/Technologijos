import React from 'react';
import Data from '../Data.json';
import Card from './Card';

const CardList = () => {
    return (
        <div className="container">
            <h1>Visi</h1>
            <div className="row">
                {Data.map((item, index) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-3 my-3">
                            <Card
                                key={index}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                description={item.description}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        </div>
                    )
                })}
            </div>
            <h1>Kaina mazesne nei 10</h1>
            <div className="row">
                {Data.filter(item => item.price < 10).map((item, index) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-3 my-3">
                            <Card
                                key={index}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                description={item.description}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        </div>
                    )
                })}
            </div>
            <h1>Prekiu likucio verte: {Data.reduce((sum, item) => {
                return sum + (item.price * item.quantity)
            }, 0)}
            </h1>
        </div>
    )
}

export default CardList;