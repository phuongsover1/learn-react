import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

const initialUsersList = [];
function App() {
	const [errorObject, setErrorObject] = useState({
		isValid: true,
		errorMessage: "",
	});
	const [usersList, changeUsersList] = useState(initialUsersList);
	const handleAddUserClick = (newUser) => {
		if (
			newUser.username.trim().length === 0 &&
			newUser.age.trim().length === 0
		) {
			setErrorObject({
				isValid: false,
				errorMessage: "Please enter a valid name and age (non-empty values)",
			});
			return;
		} else if (newUser.username.trim().length === 0) {
			setErrorObject({
				isValid: false,
				errorMessage: "Please enter a valid name (non-empty values)",
			});
			return;
		} else if (newUser.age.trim().length === 0) {
			setErrorObject({
				isValid: false,
				errorMessage: "Please enter a valid age (non-empty values)",
			});
			return;
		} else if (newUser.age.trim().length > 0) {
			newUser.age = +newUser.age;
			if (newUser.age <= 0) {
				setErrorObject({
					isValid: false,
					errorMessage: "Please enter a valid age (age > 0)",
				});
				return;
			}
		}
		setErrorObject((prevState) => {
			return { ...prevState, isValid: true };
		});
		changeUsersList((prevUsersList) => [newUser, ...prevUsersList]);
	};

	const closeBtnModalClickHandler = () => {
		setErrorObject((prevState) => {
			return { ...prevState, isValid: true };
		});
	};
	return (
		<div>
			<AddUser onAddUserClick={handleAddUserClick} />
			<UsersList usersList={usersList} />
			{errorObject.isValid === false ? (
				<ErrorModal
					errorMessage={errorObject.errorMessage}
					onCloseClick={closeBtnModalClickHandler}
				/>
			) : (
				""
			)}
		</div>
	);
}

export default App;
