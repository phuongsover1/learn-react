import React, { useCallback, useEffect, useState } from 'react';

let logoutTimer;

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
});

const calculateRemainingTime = expirationTime => {
  const currentTime = new Date().getTime();

  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const getStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(expirationTime);

  if (remainingTime <= 60000) {
    return null;
  }
  return { token: storedToken, duration: remainingTime };
};

const AuthContextProvider = props => {
  const tokenData = getStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  } else initialToken = null;
  const [token, setToken] = useState(initialToken);
  const isUserLoggedIn = token !== null && token !== '';

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);

    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    // TODO: remove settimeout if the user logout manually
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

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
