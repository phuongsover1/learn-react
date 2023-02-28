import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  let numberOfCartItems = 0;
  if (cartContext.items.length !== 0)
    numberOfCartItems = cartContext.items.reduce(
      (currentNumber, item) => currentNumber + item.amount,
      0
    );
  const className = `${styles.button} ${props.isClick && styles.bump}`;

  return (
    <button className={className} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
