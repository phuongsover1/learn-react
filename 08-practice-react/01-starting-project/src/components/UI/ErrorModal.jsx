import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = () => {
	return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
	return (
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
	);
};

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title="Invalid Input"
					messages={props.messages}
					onCloseClick={props.onCloseClick}
				/>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
