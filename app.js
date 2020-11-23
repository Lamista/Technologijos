//JSX
React.createClass = createReactClass;
var HelloComponent = React.createClass({
    render: function () {
        return <div>Hello {this.props.name}</div>;
    }
});
ReactDOM.render(React.createElement(
    HelloComponent,
    { name: "Jane" }),
    document.getElementById('root')
);

//JSX ir ES6
class HelloComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}
ReactDOM.render(
    <HelloComponent name="Jane" />,
    document.getElementById('root')
);