import { Button } from 'antd';
import React, { useState } from 'react';

const ButtonComponent = () => {
  const [loading, setLoading] = useState(false);

  const onButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <Button
        type='primary'
        onClick={onButtonClick}
        loading={loading}
      >
        My First Button
      </Button>
      {/* Block Button */}
      {/* <Button type='primary' block>
          Block Button
        </Button> */}
    </>
  );
};

export default ButtonComponent;
