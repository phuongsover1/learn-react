import { useState } from 'react';

const useInput = checkInputIsValidFn => {
  const [enteredInput, setEnteredInput] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const enteredInputIsValid = checkInputIsValidFn(enteredInput);
  const inputHasError = !enteredInputIsValid && inputIsTouched;

  const setInputChangeHandler = event => {
    setEnteredInput(event.target.value);
  };

  const setInputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setEnteredInput('');
    setInputIsTouched(false);
  };

  return {
    value: enteredInput,
    valueIsValid: enteredInputIsValid,
    hasError: inputHasError,
    setInputChangeHandler,
    setInputBlurHandler,
    reset,
  };
};

export default useInput;
