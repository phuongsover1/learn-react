import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = () => {
  return async dispatch => {
    dispatch(
      uiActions.setNotification({
        status: 'fetching',
        title: 'Fetching...',
        message: 'Sending cart data !',
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-d373b-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) throw new Error('Error occurred when fetching data.');

      const cartData = await response.json();

      return cartData;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        uiActions.setNotification({
          status: 'success',
          title: 'Success!!',
          message: 'Fetching data successfully!',
        })
      );
      console.log(cartData);
      dispatch(
        cartActions.replaceCart({
          items: cartData.items ?? [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

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
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
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
      console.log(error);
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
