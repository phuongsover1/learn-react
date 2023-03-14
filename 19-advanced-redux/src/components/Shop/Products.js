import React from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Head first Java',
    price: 30,
    description: 'Java book for beginner',
  },
  {
    id: 'p2',
    title: 'Head first Javascript',
    price: 20,
    description: 'Javascript book for beginner',
  },
  {
    id: 'p3',
    title: 'Head first MySql',
    price: 25,
    description: 'MySql book for beginner',
  },
];

const Products = props => {
  const productList = DUMMY_PRODUCTS.map(item => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
