import { Alert, Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';

const FormComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowAlert(true);
    }, 2000);
  };

  return (
    <>
      {showAlert && (
        <Alert
          type='error'
          message='Error'
          description='There was an error on login.'
          closable
          onClose={() => setShowAlert(false)}
          style={{ maxWidth: '50%', margin: '3rem auto 0 auto' }}
        />
      )}
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
    </>
  );
};

export default FormComponent;
