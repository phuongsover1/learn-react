import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
	let expenseContent = <p>No expenses found.</p>;

	if (props.items.length === 0)
		return <h2 className="expenses-list__fallback">No expenses found.</h2>;

	expenseContent = props.items.map((expense) => (
		<ExpenseItem
			key={expense.id}
			title={expense.title}
			amount={expense.amount}
			date={expense.date}
		/>
	));

	return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;
