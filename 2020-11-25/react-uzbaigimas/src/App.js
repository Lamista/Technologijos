import React, { Component } from 'react';
import Papildomas from './components/Papildomas';
import Forma from './components/Forma';
import ProductAdministrationComponent from './components/ProductAdministrationComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/HeaderComponent';
import SokantisPaveiksliukas from './components/SokantisPaveiksliukas';
import PapildomasHooks from './components/PapildomasHooks';
import IntervalinisKomponentasHooks from './components/IntervalinisKomponentasHooks';
import IntervalinisKomponentas from './components/IntervalinisKomponentas';

class App extends Component {


  render() {
    return (
      <div>
        <Papildomas
          name={"Vardas"}
          surname={"Pavarde"}
        />
        <PapildomasHooks
          name={"Vardas"}
          surname={"Pavarde"}
        />
        <IntervalinisKomponentas />
        <IntervalinisKomponentasHooks />
        <Forma />
        <ProductAdministrationComponent />
        <Header />
        <SokantisPaveiksliukas />
      </div>
    )
  }
}

export default App;
