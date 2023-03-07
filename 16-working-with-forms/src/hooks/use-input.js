import { useState, useReducer } from 'react';

const defaultState = {
  value: '',
  isTouched: false,
};
const inputReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return defaultState;
};
const useInput = checkInputIsValidFn => {
  const [inputState, dispatchInput] = useReducer(inputReducer, defaultState);

  const enteredInputIsValid = checkInputIsValidFn(inputState.value);
  const inputHasError = !enteredInputIsValid && inputState.isTouched;

  const setInputChangeHandler = event => {
    dispatchInput({ type: 'INPUT', value: event.target.value });
  };

  const setInputBlurHandler = () => {
    dispatchInput({ type: 'BLUR', isTouched: true });
  };

  const reset = () => {
    dispatchInput({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    valueIsValid: enteredInputIsValid,
    hasError: inputHasError,
    setInputChangeHandler,
    setInputBlurHandler,
    reset,
  };
};

export default useInput;
