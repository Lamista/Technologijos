import React, { Component } from 'react';
import axios from 'axios';
import Card from '../components/CardComponent';
import WelcomeMsg from '../components/WelcomeComponent';

class CardList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios
            .get("https://itpro2017.herokuapp.com/api/products")
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container" >
                <WelcomeMsg />
                <div className="row d-flex justify-content-around">
                    {this.state.products.map(({ id, ...otherProps }) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-3 m-1" key={id}>
                                <Card
                                    id={id}
                                    {...otherProps}
                                />
                            </div>
                        )
                    })}
                </div>
            </div >
        )
    }
}

export default CardList;