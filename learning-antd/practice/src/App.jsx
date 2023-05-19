import { Button, Space } from 'antd';
import { useState } from 'react';
// import './App.css';
import ButtonComponent from './components/ButtonComponent';
import DatePickerComponent from './components/DatePickerComponent';
import FormComponent from './components/FormComponent';
import InputComponent from './components/InputComponent';
import ProgressComponent from './components/ProgressComponent';
import SelectComponent from './components/SelectComponent';
import SpinComponent from './components/SpinComponent';
import TableComponent from './components/TableComponent';

function App() {
  return (
    <div
      className='App'
      style={{
        width: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      {/* <ButtonComponent /> */}
      {/* <InputComponent /> */}
      {/* <SelectComponent /> */}
      {/* <FormComponent /> */}
      {/* <TableComponent /> */}
      {/* <DatePickerComponent /> */}
      {/* <SpinComponent /> */}
      <ProgressComponent />
    </div>
  );
}

export default App;
