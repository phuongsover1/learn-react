import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<header className={props.classes}>
			<h2>ReactMeals</h2>
			<HeaderCartButton />
		</header>
	);
};

export default Header;
