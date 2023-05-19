import { Button } from 'antd';
import { useState } from 'react';
// import './App.css';
import ButtonComponent from './components/ButtonComponent';
import FormComponent from './components/FormComponent';
import InputComponent from './components/InputComponent';
import SelectComponent from './components/SelectComponent';
import TableComponent from './components/TableComponent';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <ButtonComponent /> */}
        {/* <InputComponent /> */}
        {/* <SelectComponent /> */}
        {/* <FormComponent /> */}
        <TableComponent />
      </header>
    </div>
  );
}

export default App;
