import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, changeUsersList] = useState([]);
	const handleAddUserClick = (newUser) => {
		changeUsersList((prevUsersList) => [newUser, ...prevUsersList]);
	};

	return (
		<React.Fragment>
			<AddUser onAddUserClick={handleAddUserClick} />
			<UsersList usersList={usersList} />
		</React.Fragment>
	);
}

export default App;
