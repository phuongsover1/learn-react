import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
	const [errorObject, setErrorObject] = useState({
		isValid: true,
		messages: "",
	});
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

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

		props.onAddUserClick(newUser);

		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const onCloseClickHandler = () => {
		setErrorObject({ isValid: true });
	};
	return (
		<Wrapper>
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
					<input
						type="text"
						name="username"
						id="username"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						type="number"
						name="age"
						id="age"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
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
		</Wrapper>
	);
};

export default AddUser;
