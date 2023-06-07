import React from 'react';

type HeadingProps = {
  children: string;
};
const Heading = (props: HeadingProps) => {
  return <header>{props.children}</header>;
};

export default Heading;
