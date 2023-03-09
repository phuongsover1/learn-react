import styles from './Checkout.module.css';
const Checkout = props => {
  const onSubmitHandler = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.control}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.control}>
        <label htmlFor='street'>Street:</label>
        <input type='text' id='street' />
      </div>
      <div className={styles.control}>
        <label htmlFor='postal'>Postal:</label>
        <input type='text' id='postal' />
      </div>
      <div className={styles.control}>
        <label htmlFor='city'>City:</label>
        <input type='text' id='city' />
      </div>
      <button type='submit'>Confirm</button>
      <button onClick={props.onClose}>Cancel</button>
    </form>
  );
};

export default Checkout;
