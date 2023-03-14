import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let initial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data !',
        })
      );
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

    if (initial) {
      initial = false;
      return;
    }
    sendCartData().catch(error => {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
