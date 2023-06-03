import React from 'react';

type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
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
