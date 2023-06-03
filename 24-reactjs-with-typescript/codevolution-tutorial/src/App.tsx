import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    lastName: 'Nguyen',
    firstName: 'Phuong',
  };

  const personList: { firstName: string; lastName: string }[] = [
    { firstName: 'Phuong', lastName: 'Nguyen' },
    { firstName: 'Khang', lastName: 'Nguyen' },
    { firstName: 'Long', lastName: 'Le' },
  ];
  return (
    <div className='App'>
      {/* <Greet name='Phuong' messageCount={15} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={personList} /> */}
      <Status status='success' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
