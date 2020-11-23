//naujo komponento sablonas
class Component extends React.Component {
    render() {
        return (
            <div>
            </div>
        );
    }
};
Component.propTypes = {
    // Properties JSON
};

// sakninio komponento nupiesimas
ReactDOM.render(
    <Component prop1={prop1Value} />,
    document.getElementById('root')
);