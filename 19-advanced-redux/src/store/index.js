import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: UIReducer,
    cart: cartSlice.reducer,
  },
});

export default store;
