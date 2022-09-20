import React from "react";
import styles from "./UsersList.module.css";
import Card from "./UI/Card";

// usersList
const UsersList = (props) => {
	const style = {
		backgroundColor: "#eee",
		margin: "1rem",
	};

	let content = "";
	if (props.usersList.length > 0) {
		content = props.usersList.map((user) => (
			<li key={user.key}>{`${user.username} (${user.age} years old)`}</li>
		));
	} else {
		content = <h2>The list is empty. Please add some user.</h2>;
	}

	return (
		<div className={styles.users}>
			<Card style={style}>
				<ul>{content}</ul>
			</Card>
		</div>
	);
};

export default UsersList;
