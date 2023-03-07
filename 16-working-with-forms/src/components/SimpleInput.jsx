import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    setInputChangeHandler: nameInputChangeHandler,
    setInputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput(value => value.trim() !== '');
  const inputNameClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    setInputChangeHandler: emailInputChangeHandler,
    setInputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput(value => value.trim() !== '' && value.includes('@'));
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true; // validate for form in here.

  const onSubmitFormHandler = event => {
    event.preventDefault();
    console.log(enteredName);
    console.log(enteredEmail);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    // console.log(inputRef.current.value); SHOULD NOT DO THIS.
    nameInputReset();
    emailInputReset();
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputHasError && (
        <span className='error-text'>Name must not be empty!</span>
      )}

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      {emailInputHasError && (
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
