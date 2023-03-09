import React, { useEffect, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce(
    (currentNumber, item) => currentNumber + item.amount,
    0
  );

  const btnClasses = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;
  const { items } = cartContext;
  useEffect(() => {
    console.log("useEffect");
    if (items.length === 0) return;
    setIsBtnHighlighted(true);
    const timer = setTimeout(() => setIsBtnHighlighted(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
