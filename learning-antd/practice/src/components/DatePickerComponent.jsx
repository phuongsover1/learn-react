import { DatePicker } from 'antd';
import React from 'react';

const DatePickerComponent = () => {
  return (
    <div>
      <h2>Demo DatePicker</h2>
      <DatePicker inputReadOnly placement='bottomLeft' />
      <br />
      <DatePicker.RangePicker />
    </div>
  );
};

export default DatePickerComponent;
