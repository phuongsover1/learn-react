import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		console.log("in useEffect hook.");
		const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
		if (storedUserLoggedInInformation === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		setIsLoggedIn(false);
		localStorage.removeItem("isLoggedIn");
	};

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		setIsLoggedIn(true);
		localStorage.setItem("isLoggedIn", "1");
	};
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
