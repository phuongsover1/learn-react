import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  const personName = {
    lastName: 'Nguyen',
    firstName: 'Phuong',
  };
  return (
    <div className='App'>
      <Greet name='Phuong' messageCount={15} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
