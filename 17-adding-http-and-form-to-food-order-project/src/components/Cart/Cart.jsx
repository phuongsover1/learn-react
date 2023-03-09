import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import styles from './Cart.module.css';
import useHttp from '../../hooks/use-http';

const logOrder = data => {
  console.log(data);
};
const Cart = props => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmounts.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const { error: orderError, sendRequest: saveOrder } = useHttp();
  const [isChekingOut, setIsCheckingOut] = useState(false);

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
  return (
    <Modal onClick={props.onClose}>
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
    </Modal>
  );
};

export default Cart;
