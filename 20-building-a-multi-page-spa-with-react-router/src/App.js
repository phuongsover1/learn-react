import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Product from './pages/Product';
import MainHeder from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <div>
      <MainHeder />
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Product />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
