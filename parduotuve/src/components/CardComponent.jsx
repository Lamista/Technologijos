import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../images/apple.jpg'
import book from '../images/book.jpg'
import mouse from '../images/mouse.jpg'
import pen from '../images/pen.jpg'
import pencil from '../images/pencil.jpg'
import phone from '../images/phone.jpg'
import defaultImg from '../images/default.png'

const CardComponent = ({ id, title, imageUrl, description, price, quantity }) => {
    let image = null;
    switch (imageUrl) {
        case "apple":
            image = apple;
            break;
        case "book":
            image = book;
            break;
        case "mouse":
            image = mouse;
            break;
        case "pen":
            image = pen;
            break;
        case "pencil":
            image = pencil;
            break;
        case "phone":
            image = phone;
            break;
        default:
            image = defaultImg;
    }
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="row">
                    <div className="col">
                        <p>Kaina: {price}€</p>
                    </div>
                    <div className="col">
                        <p>Kiekis: {quantity}</p>
                    </div>
                </div>
                <Link to={`/products/${id}`} className="btn btn-primary">Shop</Link>
            </div>
        </div >
    )
}

export default CardComponent;