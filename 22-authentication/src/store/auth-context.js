import React, { useState } from 'react';

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
});

const AuthContextProvider = props => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const isUserLoggedIn = token !== null && token !== '';

  const loginHandler = token => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => setToken(null);

  const authContextObj = {
    token,
    isLoggedIn: isUserLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContextObj}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
