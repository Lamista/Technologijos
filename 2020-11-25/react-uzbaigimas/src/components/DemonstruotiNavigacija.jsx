import React from 'react'

const DemonstruotiNavigacija = (props) => {
    let goHome = () => props.history.push("/");
    let { id } = props.match.params;
    return (
        <div>
            At route: {props.location.pathname} (ID: {id})
            <button onClick={goHome}>Go Home</button>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    );
};

export default DemonstruotiNavigacija;
