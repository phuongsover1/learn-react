import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.itemId === newItem.id);

      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        ++existingItem.quantity;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const itemInCartIndex = state.items.findIndex(item => item.itemId === id);
      const itemWithIndex = state.items[itemInCartIndex];
      if (itemWithIndex.quantity > 1) {
        itemWithIndex.quantity--;
        itemWithIndex.totalPrice -= itemWithIndex.price;
      } else {
        state.items = state.items.filter(item => item.itemId !== id);
      }
      state.totalQuantity--;
    },
  },
});

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiActions.setNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data !',
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-d373b-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Something wrong happened');
      }

      dispatch(
        uiActions.setNotification({
          status: 'success',
          title: 'Success!!',
          message: 'Sent cart data successfully!',
        })
      );
    };

    console.log('sendrequest');
    sendRequest().catch(error => {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  };
};
export const cartActions = cartSlice.actions;
export default cartSlice;
