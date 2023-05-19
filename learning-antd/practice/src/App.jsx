import { Button, Space } from 'antd';
import { useState } from 'react';
// import './App.css';
import ButtonComponent from './components/ButtonComponent';
import DatePickerComponent from './components/DatePickerComponent';
import FormComponent from './components/FormComponent';
import InputComponent from './components/InputComponent';
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
      <Space direction='vertical'>
        {/* <ButtonComponent /> */}
        {/* <InputComponent /> */}
        {/* <SelectComponent /> */}
        {/* <FormComponent /> */}
        {/* <TableComponent /> */}
        {/* <DatePickerComponent /> */}
        <SpinComponent />
      </Space>
    </div>
  );
}

export default App;
