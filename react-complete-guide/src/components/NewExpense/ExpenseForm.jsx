import { prettyFormat } from '@testing-library/react';
import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm() {
	// const [enteredTitle, setEnteredTitle] = useState('');
	// const [enteredAmount, setAmount] = useState('');
	// const [enteredDate, setDate] = useState('');

	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});
	const titleChangeHandler = (event) => {
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });

		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};

	const amountChangeHandler = (event) => {
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });

		setUserInput((prevState) => {
			return { ...prevState, enteredAmount: event.target.value };
		});
	};

	const dateChangeHandler = (event) => {
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });

		setUserInput((prevState) => {
			return { ...userInput, enteredDate: event.target.value };
		});
	};

	return (
		<form>
			<div className="new-expense__control">
				<label for="">Title</label>
				<input type="text" onChange={titleChangeHandler} />
			</div>
			<div className="new-expense__control">
				<label for="">Amount</label>
				<input
					type="number"
					min="0.01"
					step="0.01"
					onChange={amountChangeHandler}
				/>
			</div>
			<div className="new-expense__control">
				<label for="">Date</label>
				<input
					type="date"
					min="2022-09-01"
					max="2023-12-31"
					onChange={dateChangeHandler}
				/>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
