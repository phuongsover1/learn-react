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
import TablePaginationSortingFilter from './components/TablePaginationSortingFilter';

function App() {
  return (
    <div
      className='App'
      style={{
        width: '50%',
        margin: '3rem auto 0 auto',
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
      {/* <ProgressComponent /> */}
      <TablePaginationSortingFilter />
    </div>
  );
}

export default App;
