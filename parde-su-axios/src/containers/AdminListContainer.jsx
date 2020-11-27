import React, { Component } from "react";
import axios from "axios";
import AdminTableComponent from "../components/AdminTableComponent";
import itemImg from "../images/samsung.jpg";
import { Link } from "react-router-dom";

export default class AdminListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        axios
            .get("https://itpro2017.herokuapp.com/api/products")
            .then((prod) => {
                this.setState({ products: prod });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { data } = this.state.products;
        console.log(data);
        if (data) {
            return (
                <div className="container mt-5">
                    <Link to={`/admin/products/new`} className="btn btn-primary mb-5">
                        Add new product
                    </Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                            </tr>
                        </thead>
                        {data.map(({ id, ...otherProps }) => (
                            <AdminTableComponent
                                key={id}
                                id={id}
                                itemImg={itemImg}
                                {...otherProps}
                            />
                        ))}
                    </table>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}