import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import MainHeder from './components/MainHeader';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeder />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
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
