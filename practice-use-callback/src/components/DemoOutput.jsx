import React, { useMemo } from 'react';

const DemoOutput = ({ show }) => {
  console.log(
    '🚀 ~ file: DemoOutput.jsx:9 ~ DemoOutput ~ DemoOutput:',
    'In DemoOutput'
  );
  if (!show) return;
  return <div>I am a paragraph</div>;
};

export default DemoOutput;
