import React from 'react';
import './App.css';
import Button from './components/Button';

const handleClick = (): void => console.log('Hello World!!!');
function App() {
  return (
    <div className='App'>
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;
