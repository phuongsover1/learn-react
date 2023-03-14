import React, { useEffect } from 'react';
const Welcome = () => {
  let a = 3;
  useEffect(() => {
    a = 5;
  }, []);
  return <h1>The Welcome Page</h1>;
};

export default Welcome;
