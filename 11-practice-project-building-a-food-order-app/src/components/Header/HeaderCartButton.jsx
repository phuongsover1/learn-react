import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	return (
		<div>
			<FontAwesomeIcon icon="fa-regular fa-cart-shopping " size="1x" />
			<p>Your Cart</p>
			badge
		</div>
	);
};

export default HeaderCartButton;
