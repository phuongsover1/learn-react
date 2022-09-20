import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";

// usersList
const UsersList = (props) => {
	let content = "";
	if (props.usersList.length > 0) {
		content = props.usersList.map((user) => (
			<li key={user.key}>{`${user.username} (${user.age} years old)`}</li>
		));
	} else {
		content = <h2>The list is empty. Please add some user.</h2>;
	}

	return (
		<Card className={styles.users}>
			<ul>{content}</ul>
		</Card>
	);
};

export default UsersList;
