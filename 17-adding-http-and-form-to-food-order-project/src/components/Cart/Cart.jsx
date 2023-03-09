import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmounts.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const addToCartHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeFromCartHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
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
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={styles.button} onClick={props.onOrder}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
