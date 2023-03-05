import { useState } from 'react';

const SimpleInput = props => {
  const [enteredNameInput, setEnteredNameInput] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouch] = useState(false);
  const enteredInputIsValid = enteredNameInput.trim() !== '';
  const enteredNameIsInvalid = !enteredInputIsValid && enteredNameIsTouched;
  const inputNameClasses = enteredNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const [enteredEmailInput, setEnteredEmailInput] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid =
    enteredEmailInput.trim() !== '' && enteredEmailInput.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (enteredInputIsValid && enteredEmailIsValid) formIsValid = true; // validate for form in here.

  const nameInputChangeHandler = event => {
    setEnteredNameInput(event.target.value);
  };

  const nameInputBlurHandle = () => {
    setEnteredNameIsTouch(true);
  };

  const emailInputChangeHandler = event => {
    setEnteredEmailInput(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };
  const onSubmitFormHandler = event => {
    setEnteredNameIsTouch(true);
    setEnteredEmailTouched(true);
    event.preventDefault();
    console.log(enteredNameInput);
    console.log(enteredEmailInput);

    if (
      enteredNameInput.trim() === '' &&
      enteredEmailInput.trim() === '' &&
      !enteredEmailInput.trim().includes('@')
    ) {
      return;
    }

    // console.log(inputRef.current.value); SHOULD NOT DO THIS.
    setEnteredNameInput('');
    setEnteredNameIsTouch(false);
    setEnteredEmailInput('');
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredNameInput}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandle}
        />
      </div>
      {enteredNameIsInvalid && (
        <span className='error-text'>Name must not be empty!</span>
      )}

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmailInput}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      {enteredEmailIsInvalid && (
        <span className='error-text'>
          Email must not be empty and must include @
        </span>
      )}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
