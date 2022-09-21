import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
	const onClickHandler = () => {
		props.onCloseClick && props.onCloseClick();
	};

	return (
		<button
			onClick={onClickHandler}
			className={styles.button}
			type={props.type || "button"}
		>
			{props.children}
		</button>
	);
};

export default Button;
