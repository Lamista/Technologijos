import React, { Component } from 'react';
import Data from '../Data.json';
import Card from '../components/CardComponent';
import WelcomeMsg from '../components/WelcomeComponent';
import ServicesContext from '../ServicesContext.js';

class CardList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({ products: Data })
    }
    render() {
        return (
            <div className="container" >
                <ServicesContext.Consumer>
                    {({ userService }) => <button onClick={() => userService.username = "user1"}>Set user (login) to user1</button>}
                </ServicesContext.Consumer>
                <WelcomeMsg />
                <div className="row">
                    {this.state.products.map((item) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-3 my-3" key={item.title}>
                                <Card
                                    id={item.title.toLowerCase()}
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
                {/* <h1>Kaina mazesne nei 10</h1>
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
            </h1> */}
            </div >
        )
    }
}

export default CardList;