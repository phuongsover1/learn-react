import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (enteredAmount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: enteredAmount,
    });
  };
  return (
    <li key={props.id} className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealItemForm
        item={{ id: props.id, name: props.name, price: props.price }}
        onAddToCart={addToCartHandler}
      />
    </li>
  );
};
export default MealItem;
