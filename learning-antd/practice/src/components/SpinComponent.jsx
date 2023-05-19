import { Button, Spin } from 'antd';
import React, { useState } from 'react';

const SpinComponent = () => {
  const [spinning, setSpinning] = useState(true);
  return (
    <div>
      {/* Enable Spinning */}
      {/* <Spin spinning={true}></Spin> */}
      {/* Stop Spinning */}
      {/* <Spin spinning={false}></Spin> */}
      {/* Toggle Spinning */}
      <Spin spinning={spinning}></Spin>
      <br />
      <Button
        style={{ marginTop: '2rem' }}
        onClick={() => setSpinning(state => !state)}
        type='primary'
      >
        Toggle Spinning
      </Button>
      <Spin spinning={spinning}>
        <p>P tag 1</p>
        <p>P tag 2</p>
        <p>P tag 3</p>
      </Spin>
    </div>
  );
};

export default SpinComponent;
