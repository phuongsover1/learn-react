import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
	return (
		<div className={styles.backdrop}>
			<div className={styles.modal}>
				<Card>
					<div className={styles.header}>
						<h2 className={styles.header}>Invalid input</h2>
					</div>
					<div className={styles.content}>
						<p>{props.errorMessage}</p>
						<div className={styles.actions}>
							<Button text="Okay" onCloseClick={props.onCloseClick} />
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default ErrorModal;
