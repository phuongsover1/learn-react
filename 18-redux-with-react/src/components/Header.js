import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import classes from './Header.module.css';

const Header = () => {
  const isAuthenticate = useSelector(state => state.auth.isAuthenticate);
  const dispatchAuth = useDispatch();

  const onLogoutHandler = () => {
    dispatchAuth(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticate && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
