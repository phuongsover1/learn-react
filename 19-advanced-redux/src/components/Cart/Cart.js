import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
  const cartItems = useSelector(state => state.cart.items);

  const cartItemsContent = cartItems.map(item => (
    <CartItem
      key={item.itemId}
      item={{
        itemId: item.itemId,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
      }}
    />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemsContent}</ul>
    </Card>
  );
};

export default Cart;
