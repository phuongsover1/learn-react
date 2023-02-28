import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      if (existingCartItemIndex === -1) {
        const updatedItems = state.items.concat(action.item);
        const updatedAmount =
          state.totalAmount + action.item.price * action.item.amount;
        return { items: updatedItems, totalAmount: updatedAmount };
      }
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      let updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      const updatedAmount = updatedItems.reduce(
        (sum, currentItem) => sum + currentItem.amount * currentItem.price,
        0
      );
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
