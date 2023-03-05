import { useState, useRef, useEffect } from 'react';

const SimpleInput = props => {
  const inputRef = useRef('');
  const [inputValue, setInputValue] = useState('');
  const [enteredNameIsValid, setEnterNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouch] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is valid');
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const onSubmitFormHandler = event => {
    setEnteredNameIsTouch(true);
    event.preventDefault();
    console.log(inputValue);

    if (inputValue.trim() === '') {
      setEnterNameIsValid(false);
      return;
    }

    setEnterNameIsValid(true);

    // console.log(inputRef.current.value); SHOULD NOT DO THIS.
    setInputValue('');
  };

  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const inputNameClasses = enteredNameIsInvalid
    ? 'form-control invalid'
    : 'form-control valid';

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={inputValue}
          onChange={nameInputChangeHandler}
          ref={inputRef}
        />
      </div>
      {enteredNameIsInvalid && (
        <span className='error-text'>Name must not be empty!</span>
      )}

      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
