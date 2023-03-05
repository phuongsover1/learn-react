import { useState, useRef } from 'react';
const SimpleInput = props => {
  const [inputValue, setInputValue] = useState('');
  const [enteredNameIsValid, setEnterNameIsValid] = useState(true);
  const inputRef = useRef('');

  const nameInputChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const onSubmitFormHandler = event => {
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

  const inputNameClasses = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid';

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
      {!enteredNameIsValid && (
        <span className='error-text'>Name must not be empty!</span>
      )}

      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
