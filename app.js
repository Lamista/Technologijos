
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