import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm() {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setAmount] = useState('');
	const [enteredDate, setDate] = useState('');
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
		console.log('amount: ', enteredAmount);
	};

	const dateChangeHandler = (event) => {
		setDate(event.target.value);
		console.log('date: ', enteredDate);
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
