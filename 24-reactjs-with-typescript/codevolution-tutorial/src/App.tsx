import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Counter from './components/Counter';
import Input from './components/Input';

const handleClick = (
  id: number,
  event?: React.MouseEvent<HTMLButtonElement>
): void => {
  console.log('id: ', id);
  console.log('event: ', event?.currentTarget);
};

const handleChange = (event?: React.ChangeEvent<HTMLInputElement>): void => {
  console.log('event: ', event?.target.value);
};

function App() {
  return (
    <div className='App'>
      {/* <Button handleClick={handleClick.bind(null, 1)} /> */}
      {/* <Input value='asd' handleChange={handleChange} /> */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem'}}  /> */}
      <Counter />
    </div>
  );
}

export default App;
