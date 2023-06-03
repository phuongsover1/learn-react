import React from 'react';
import './App.css';
import Button from './components/Button';

const handleClick = (
  id: number,
  event?: React.MouseEvent<HTMLButtonElement>
): void => {
  console.log('id: ', id);
  console.log('event: ', event?.currentTarget);
};

function App() {
  return (
    <div className='App'>
      <Button handleClick={handleClick.bind(null, 1)} />
    </div>
  );
}

export default App;
