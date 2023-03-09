import { useContext, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountRef = useRef();
  const cartContext = useContext(CartContext);
  const onSubmitForm = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.getCurrentValue();
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }
    setIsAmountValid(true);
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <Input
        label="Amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amountRef}
      />
      {!isAmountValid && <p>Please enter a valid number (1-5)</p>}
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
