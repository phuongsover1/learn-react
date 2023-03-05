import { useState, useRef } from 'react';
const SimpleInput = props => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef('');

  const nameInputChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const onSubmitFormHandler = event => {
    event.preventDefault();
    console.log(inputValue);

    if (inputValue.trim() === '') return;

    // console.log(inputRef.current.value); SHOULD NOT DO THIS.
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={inputValue}
          onChange={nameInputChangeHandler}
          ref={inputRef}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
