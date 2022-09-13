import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	let expenseData;
	const saveExpenseDataHandler = (enteredExpenseData) => {
		expenseData = {
			...enteredExpenseData,
			id: Math.random.toString,
		};

		props.onSaveExpenseData(expenseData);
		console.log(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
}

export default NewExpense;
