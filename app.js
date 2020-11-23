//komponentu kompozicija #1
class AvatarComponent extends React.Component {
    render() {
        return (
            <img className="Avatar"
                src={this.props.user.avatarUrl}
                alt={this.props.user.name}
            />
        );
    }
}

//komponentu kompozicija #2
class CommentComponent extends React.Component {
    render() {
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <AvatarComponent user={this.props.author} />
                    <div className="UserInfo-name">
                        {this.props.author.name}
                    </div>
                </div>
            </div>
        );
    }
}

//komponentu atributai (props) #1
ProductCardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

//komponentu atributai (props) #2
<ProductCardComponent
    key={index}
    id={product.id}
    image={product.image}
    title={product.title}
    description={product.description}
    price={product.price}
/>

//komponentas su atributu
// vėliau dar ir import PropTypes from 'prop-types';
class HelloComponent extends React.Component {
    render() {
        return (<div>Hello {this.props.name}</div>);
    }
}

HelloComponent.propTypes = {
    name: PropTypes.string.isRequired
}

ReactDOM.render(
    (<HelloComponent name="Jane" />),
    document.getElementById('root')
);