import React from 'react';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import styles from './Cart.module.css';
import useHttp from '../../hooks/use-http';

const Cart = props => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmounts.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const { error: orderError, sendRequest: saveOrder } = useHttp();
  const [isChekingOut, setIsCheckingOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const addToCartHandler = item => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeFromCartHandler = id => {
    cartContext.removeItem(id);
  };

  const onOrderHandler = () => {
    setIsCheckingOut(true);
  };

  const onSubmitOrderHandler = userData => {
    setDidSubmit(false);
    setIsSubmitting(true);
    saveOrder(
      {
        url: 'https://react-http-d373b-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
        method: 'POST',
        body: {
          user: userData,
          orderedItems: cartContext.items,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      () => {}
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearItems();
  };
  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map(item => (
        <CartItem
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addToCartHandler.bind(null, item)}
          onRemove={removeFromCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalAction = (
    <div className={styles.actions}>
      <button className={styles['button-alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={onOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const contentIsNotSubmitting = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChekingOut && (
        <Checkout
          onSubmitOrder={onSubmitOrderHandler}
          onClose={props.onClose}
        />
      )}
      {!isChekingOut && modalAction}
    </React.Fragment>
  );

  const contentIsSubmitting = <p>Your order is submitting ... </p>;

  const contentDidSubmit = (
    <React.Fragment>
      <p>Your order was submitted successfully ! </p>
      <div className={styles.actions}>
        <button className={styles['button-alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClick={props.onClose}>
      {!isSubmitting && !didSubmit && contentIsNotSubmitting}
      {isSubmitting && !didSubmit && contentIsSubmitting}
      {!isSubmitting && didSubmit && contentDidSubmit}
    </Modal>
  );
};

export default Cart;
