import useMyInput from '../hooks/my-use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => isNotEmpty(value) && value.includes('@');

const BasicForm = props => {
  const {
    enteredValue: enteredFirstName,
    enteredInputIsValid: firstNameInputIsValid,
    inputHasError: firstNameInputHasError,
    inputChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    resetInput: firstNameInputReset,
  } = useMyInput(isNotEmpty);
  const firstNameInputClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const {
    enteredValue: enteredLastName,
    enteredInputIsValid: lastNameInputIsValid,
    inputHasError: lastNameInputHasError,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    resetInput: lastNameInputReset,
  } = useMyInput(isNotEmpty);
  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const {
    enteredValue: enteredEmail,
    enteredInputIsValid: emailInputIsValid,
    inputHasError: emailInputHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetInput: emailInputReset,
  } = useMyInput(isEmail);
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const formIsValid =
    firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid;

  const onSubmitHandler = event => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    firstNameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />{' '}
          <br />
          {firstNameInputHasError && (
            <span className='error-text'>
              First Name must not be empty !!!{' '}
            </span>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputHasError && (
            <span className='error-text'>Last name must not be empty !!! </span>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <span className='error-text'>
            Email must not be empty and must includes @ !!!{' '}
          </span>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
