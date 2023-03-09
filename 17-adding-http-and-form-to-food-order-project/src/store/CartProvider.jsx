import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
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
    let updatedAmount = updatedItems.reduce(
      (sum, currentItem) => sum + currentItem.amount * currentItem.price,
      0
    );
    return { items: updatedItems, totalAmount: updatedAmount };
  } else if (action.type === 'REMOVE') {
    const cartItemWithIdIndex = state.items.findIndex(
      item => item.id === action.id
    );
    const cartItemWithId = state.items[cartItemWithIdIndex];
    const updatedAmount = state.totalAmount - cartItemWithId.price;

    let updatedItems = null;
    if (cartItemWithId.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {
        ...cartItemWithId,
        amount: cartItemWithId.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[cartItemWithIdIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedAmount };
  } else if (action.type === 'CLEAR') {
    return { items: [], totalAmount: 0 };
  }
  return defaultCartState;
};
const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addToCartHandle = item => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeFromCartHandle = id => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };
  const clearItemsFromCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };
  const cartContext = {
    items: cartState.items,
    totalAmounts: cartState.totalAmount,
    addItem: addToCartHandle,
    removeItem: removeFromCartHandle,
    clearItems: clearItemsFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
