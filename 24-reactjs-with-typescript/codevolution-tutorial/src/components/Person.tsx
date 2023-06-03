import React from 'react';

type PersonNameProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: PersonNameProps) => {
  return (
    <div>My name is {props.name.lastName + ' ' + props.name.firstName}</div>
  );
};

export default Person;
