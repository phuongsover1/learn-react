import { EyeOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';

const InputComponent = () => {
  return (
    <>
      <Input
        placeholder='Your username'
        autoComplete='false'
        maxLength={10}
        prefix={<UserOutlined />}
        allowClear
      ></Input>
      {/* AllowClear là dấu x ở cuối input  */}
      <Input
        placeholder='Your password'
        type='password'
        autoComplete='false'
        suffix={<EyeOutlined />}
        allowClear
      ></Input>

      {/* Disabled input */}
      <Input placeholder='Disabled Input' disabled></Input>
      {/* Search Input */}
      <Input.Search
        placeholder='Type here to search'
        onSearch={e => {
          console.log('Search!!!');
        }}
      ></Input.Search>
    </>
  );
};

export default InputComponent;
