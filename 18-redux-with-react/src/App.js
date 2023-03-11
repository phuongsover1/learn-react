import React from 'react';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const isAuthenticate = useSelector(state => state.auth.isAuthenticate);
  return (
    <React.Fragment>
      <Header />
      {!isAuthenticate && <Auth />}
      {isAuthenticate && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
