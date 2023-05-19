import { Progress } from 'antd';
import React from 'react';

const ProgressComponent = () => {
  return (
    <div>
      <Progress percent={33} status='success' />
      <Progress percent={33} type='circle' />
      <br />
      <Progress percent={33} type='dashboard' strokeColor='#f5222d' />
      <Progress percent={50} type='line' status='exception' />
      <Progress percent={33} type='line' status='active' />
      <Progress step={3} percent={50} type='line' status='active' />
    </div>
  );
};

export default ProgressComponent;
