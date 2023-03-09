import React, { useRef, useImperativeHandle } from "react";
import styles from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const getValueInput = () => inputRef.current.value;
  useImperativeHandle(ref, () => {
    return {
      getCurrentValue: getValueInput,
    };
  });
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={inputRef} />
    </div>
  );
});

export default Input;
