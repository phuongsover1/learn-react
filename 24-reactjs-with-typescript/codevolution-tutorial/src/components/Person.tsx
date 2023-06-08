import React from 'react';
import { PersonNameProps } from './Person.types';


const Person = (props: PersonNameProps) => {
  return (
    <div>My name is {props.name.lastName + ' ' + props.name.firstName}</div>
  );
};

export default Person;
