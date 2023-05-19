import { Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';

const FormComponent = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Login successfully!');
    }, 2000);
  };

  return (
    <Form
      style={{
        width: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      layout='vertical'
      onFinish={onFinish}
    >
      <Form.Item label='User Name:' name='username'>
        <Input autoComplete='off' placeholder='User name'></Input>
      </Form.Item>
      <Form.Item label='Password:' name='password'>
        <Input.Password
          autoComplete='false'
          placeholder='Password'
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        ></Input.Password>
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          loading={loading}
          htmlType='submit'
          block
        >
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
