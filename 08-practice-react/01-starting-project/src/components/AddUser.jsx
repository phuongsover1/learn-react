import React from "react";
import styles from "./AddUser.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

const AddUser = (props) => {
	const style = {
		backgroundColor: "#eee",
		padding: "2rem",
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			username: e.target[0].value,
			age: e.target[1].value,
			key: Math.random().toString(),
		};

		props.onAddUserClick(newUser);
	};
	return (
		<form className={styles.input} onSubmit={handleSubmit}>
			<Card style={style}>
				<label for="username">Username</label>
				<input type="text" name="username" id="username" />
				<label for="age">Age (Years)</label>
				<input type="number" name="age" id="age" />
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						padding: "0.5rem 0",
					}}
				>
					<Button type="submit" text="Add User" />
				</div>
			</Card>
		</form>
	);
};

export default AddUser;
