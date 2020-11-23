var styles = {
    imgWidth: {
        width: '100px',
        height: '100px'
    }
};

let path = "https://i.picsum.photos/id/869/200/200.jpg?hmac=Eqnjw4kAS1sFTick74KSN6CBN01wmQg8OpxqbGtdyCU";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Picture />
                <ProductListComponent />
            </div>
        );
    }
}

class Picture extends React.Component {
    render() {
        return (<img src={path}></img>);
    }
}

class ProductListComponent extends React.Component {
    render() {
        let items = [
            {
                imgSrc: "https://www.cardiosmart.org/images/default-source/news-article-images/70545718.jpg?sfvrsn=b5c370e0_2",
                name: "milk",
                price: 1.99
            },
            {
                imgSrc: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                name: "apple",
                price: 1.59
            },
            {
                imgSrc: "https://www.dropit.bm/wp-content/uploads/2019/12/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
                name: "tomato",
                price: 4.39
            }
        ];
        return (
            <div className="row my-2">
                {items.map((item, index) => {
                    return (
                        <ProductCardComponent key={index} name={item.name} price={item.price} src={item.imgSrc} />
                    )
                })}
            </div>
        );
    }
}

class ProductCardComponent extends React.Component {
    render() {
        return (
            <div className="col-4 card">
                <img src={this.props.src} className="card-img-top" alt={this.props.name} style={styles.cardWidth} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.price}</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    (<App />),
    document.getElementById('root')
);