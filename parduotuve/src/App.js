import React from 'react';
import './App.css';
import CardList from './components/CardList';
import ProductAdministrationComponent from './components/ProductAdministrationComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <CardList />
      <ProductAdministrationComponent />
    </div>
  );
}

export default App;
