import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
	const onClickHandler = () => {
		props.onCloseClick && props.onCloseClick();
	}
	
	return (
		<button onClick={onClickHandler} className={styles.button} type={props.type}>
			{props.text}
		</button>
	);
};

export default Button;
