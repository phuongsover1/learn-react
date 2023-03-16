import React from 'react';
import { Route } from 'react-router-dom';
const Welcome = () => {
  return (
    <section>
      <h2>The Welcome Page</h2>
      <Route path='/welcome/newUser'>
        <p>Hi, new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
