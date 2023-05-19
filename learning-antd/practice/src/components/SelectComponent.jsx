import { Select } from 'antd';
import React from 'react';

const SelectComponent = () => {
  const fruits = ['Banana', 'Mango', 'Orange', 'Cherry'];
  return (
    <div>
      <p>Which is your favorite fruit?</p>
      <Select placeholder='Select fruit' style={{ width: '260px' }}>
        {fruits.map((fruit, index) => {
          return (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
      <p>With Multiple</p>
      <Select
        placeholder='Select multiple fruits'
        mode='multiple'
        style={{ width: '260px' }}
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
      <p>With MaxTagCount</p>
      <Select
        placeholder='Select multiple fruits'
        mode='multiple'
        maxTagCount={2}
        allowClear
        style={{ width: '260px' }}
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectComponent;
