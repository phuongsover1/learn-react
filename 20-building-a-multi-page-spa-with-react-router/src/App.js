import React from 'react';
import { Route } from 'react-router-dom';
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
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products'>
          <Product />
        </Route>
        <Route path='/product-detail/:productId'>
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
