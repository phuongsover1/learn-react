import React from 'react';

export type ProfilePropsType = {
  name: string;
};

const Profile = ({ name }: ProfilePropsType) => {
  return <div>Hi {name}, welcome back!!!</div>;
};

export default Profile;
