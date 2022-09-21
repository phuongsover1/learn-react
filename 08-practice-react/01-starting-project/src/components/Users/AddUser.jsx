import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [errorObject, setErrorObject] = useState({
		isValid: true,
		messages: "",
	});

	const nameInputRef = useRef(); // undefined
	const ageInputRef = useRef(); // undefined
	const handleSubmit = (e) => {
		e.preventDefault();

		const enteredUsername = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		console.log("ageInputRef: ", ageInputRef);
		if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
			setErrorObject({
				isValid: false,
				messages: "Please enter a valid name and age (non-empty values)",
			});
			return;
		} else if (enteredUsername.trim().length === 0) {
			setErrorObject({
				isValid: false,
				messages: "Please enter a valid name (non-empty values)",
			});
			return;
		} else if (enteredAge.trim().length === 0) {
			setErrorObject({
				isValid: false,
				messages: "Please enter a valid age (non-empty values)",
			});
			return;
		} else if (enteredAge.trim().length > 0) {
			if (+enteredAge <= 0) {
				setErrorObject({
					isValid: false,
					messages: " Please enter a valid age (age > 0) ",
				});
				return;
			}
		}
		setErrorObject({ isValid: true });
		const newUser = {
			username: enteredUsername,
			age: enteredAge,
			key: Math.random().toString(),
		};

		nameInputRef.current.value = "";
		ageInputRef.current.value = "";

		props.onAddUserClick(newUser);
	};

	const onCloseClickHandler = () => {
		setErrorObject({ isValid: true });
	};
	return (
		<>
			{!errorObject.isValid && (
				<ErrorModal
					onCloseClick={onCloseClickHandler}
					messages={errorObject.messages}
					title="Invalid input"
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={handleSubmit}>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" ref={nameInputRef} />
					<label htmlFor="age">Age (Years)</label>
					<input type="number" name="age" id="age" ref={ageInputRef} />
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							padding: "0.5rem 0",
						}}
					>
						<Button type="submit">Add User</Button>
					</div>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
