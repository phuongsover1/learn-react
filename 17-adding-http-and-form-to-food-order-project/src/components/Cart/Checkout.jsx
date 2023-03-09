import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    city: true,
    postal: true,
    street: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const nameControlClasses = `${styles.control} ${
    formInputIsValid.name ? '' : styles.invalid
  }`;
  const streetControlClasses = `${styles.control} ${
    formInputIsValid.street ? '' : styles.invalid
  }`;
  const postalControlClasses = `${styles.control} ${
    formInputIsValid.postal ? '' : styles.invalid
  }`;
  const cityControlClasses = `${styles.control} ${
    formInputIsValid.city ? '' : styles.invalid
  }`;

  const onSubmitHandler = event => {
    event.preventDefault();

    const nameValue = nameInputRef.current.value;
    const streetValue = streetInputRef.current.value;
    const postalValue = postalInputRef.current.value;
    const cityValue = cityInputRef.current.value;

    const nameIsValid = !isEmpty(nameValue);
    const streetIsValid = !isEmpty(streetValue);
    const cityIsValid = !isEmpty(cityValue);
    const postalIsValid = !isEmpty(postalValue) && isFiveChars(postalValue);

    setFormInputIsValid({
      name: nameIsValid,
      city: cityIsValid,
      postal: postalIsValid,
      street: streetIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalIsValid;
    if (!formIsValid) {
      return;
    }

    // submit the form
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputIsValid.name && <p>Name must not be empty </p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street:</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputIsValid.street && <p>Street must not be empty </p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal:</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formInputIsValid.postal && (
          <p>Postal code must have exact 5 charaters </p>
        )}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor='city'>City:</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputIsValid.city && <p>City must not be empty </p>}
      </div>
      <div class={styles.actions}>
        <button type='submit' className={styles.submit}>
          Confirm
        </button>
        <button onClick={props.onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default Checkout;
