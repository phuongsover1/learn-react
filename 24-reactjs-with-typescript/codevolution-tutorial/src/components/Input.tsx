import React from 'react';

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({value, handleChange}: InputProps) => {
  return <input value={value} onChange={handleChange.bind(null)} />;
};

export default Input;
