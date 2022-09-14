import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expense(props) {
	const [filterYear, setFilterYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(
		(expense) => filterYear === expense.date.getFullYear().toString()
	);

	let expensesContent = <p>No expenses found.</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}
	console.log('filteredExpenses: ', filteredExpenses);

	return (
		<Card className="expense">
			<ExpenseFilter
				selected={filterYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expensesContent}
		</Card>
	);
}

export default Expense;
