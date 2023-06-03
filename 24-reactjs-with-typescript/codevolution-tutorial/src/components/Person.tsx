import React from 'react';

type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>My name is {props.name.lastName + ' ' + props.name.firstName}</div>
  );
};

export default Person;
