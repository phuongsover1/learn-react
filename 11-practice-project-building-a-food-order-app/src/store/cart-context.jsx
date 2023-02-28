import React from "react";
const CartContext = React.createContext({
  totalAmounts: 0,
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
