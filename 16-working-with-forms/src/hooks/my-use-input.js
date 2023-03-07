import { useState } from 'react';

const useMyInput = applyInput => {
  const [enteredValue, setEnteredValue] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const enteredInputIsValid = applyInput(enteredValue);
  const inputHasError = !enteredInputIsValid && inputIsTouched;

  const inputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const resetInput = () => {
    setInputIsTouched(false);
    setEnteredValue('');
  };

  return {
    enteredValue,
    enteredInputIsValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useMyInput;
