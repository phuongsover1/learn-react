import { prettyFormat } from '@testing-library/react';
import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm() {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setAmount] = useState('');
	const [enteredDate, setDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredAmount: event.target.value };
		// });
	};

	const dateChangeHandler = (event) => {
		setDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });
		// setUserInput((prevState) => {
		// 	return { ...userInput, enteredDate: event.target.value };
		// });
	};

	const submitHandle = (event) => {
		event.preventDefault();

		const expenseDate = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log(expenseDate);

		// Clear the inputs after submitting form
		setEnteredTitle('');
		setAmount('');
		setDate('');
	};

	return (
		<form onSubmit={submitHandle}>
			<div className="new-expense__control">
				<label for="">Title</label>
				<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
			</div>
			<div className="new-expense__control">
				<label for="">Amount</label>
				<input
					type="number"
					min="0.01"
					step="0.01"
					value={enteredAmount}
					onChange={amountChangeHandler}
				/>
			</div>
			<div className="new-expense__control">
				<label for="">Date</label>
				<input
					type="date"
					min="2022-09-01"
					max="2023-12-31"
					value={enteredDate}
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
