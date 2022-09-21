import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
	return (
		<div>
			<div className={styles.backdrop}></div>
			<Card className={styles.modal}>
				<div className={styles.header}>
					<h2 className={styles.header}>{props.title}</h2>
				</div>
				<div className={styles.content}>
					<p>{props.messages}</p>
					<div className={styles.actions}>
						<Button type="button" onCloseClick={props.onCloseClick}>
							Okay
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ErrorModal;
