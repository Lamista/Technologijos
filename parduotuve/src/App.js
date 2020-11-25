import React from 'react';
import './App.css';
import CardList from './components/CardList/CardListContainer';
import ProductAdministrationFormComponent from './components/ProductAdministrationForm/ProductAdministrationFormContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const goProducts = () => props.history.push("products");
  return (
    <div>
      <p><button onClick={goProducts}
        className="btn btn-primary"
      >
        Go to Products
      </button></p>
      <CardList />
      <ProductAdministrationFormComponent />
    </div>
  );
}

export default App;
