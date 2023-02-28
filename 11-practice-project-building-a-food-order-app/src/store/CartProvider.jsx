import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = state.items.concat(action.item);
      const updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return { items: updatedItems, totalAmount: updatedAmount };
    default:
      return defaultCartState;
  }
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addToCartHandle = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeFromCartHandle = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmounts: cartState.totalAmount,
    addItem: addToCartHandle,
    removeItem: removeFromCartHandle,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
