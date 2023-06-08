import React from 'react';
import { Name } from './Person.types';

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names?.map(name => (
        <h2>{`${name.firstName} ${name.lastName}`}</h2>
      ))}
    </div>
  );
};

export default PersonList;
