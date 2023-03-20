import React, { useState } from 'react';

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
});

const AuthContextProvider = props => {
  const [token, setToken] = useState(null);
  const isUserLoggedIn = token !== null && token !== '';

  const loginHandler = token => setToken(token);

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
