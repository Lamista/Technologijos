import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

var DemonstruotiNavigacija = (props) => {
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

var AppContainer = (props) => {
  return (<div>
    <div>
      <Link to='/'>Home</Link> |&nbsp;
      <Link to='/products'>Products</Link> |&nbsp;
      <Link to={`/products/${127}`}>Product by no</Link> |&nbsp;
      <Link to='/help'>help</Link> |&nbsp;
      <Link to='/non-existant'>Non Existant</Link>
    </div>
    {props.children}
  </div>);
};

var NoMatch = (props) => {
  var goApp = () => props.history.push("/");
  return <div>Route did not match
  <button onClick={goApp}>Go Home</button></div>;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/products/:id"
            component={DemonstruotiNavigacija} />
          <Route path="/products" component={DemonstruotiNavigacija} />
          <Route path="/help" component={DemonstruotiNavigacija} />
          <Route path="*" component={NoMatch} />
          <Route component={NoMatch} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
