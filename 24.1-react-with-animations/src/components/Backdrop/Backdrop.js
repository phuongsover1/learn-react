import React from 'react';

import './Backdrop.css';

const backdrop = props => {
  const cssClasses = ['Backdrop', props.show ? 'Open' : 'Closed'];
  return <div className={'Backdrop ' +  cssClasses.join('')}></div>;
};

export default backdrop;
