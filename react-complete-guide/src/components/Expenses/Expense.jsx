import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expense(props) {
	const [filterYear, setFilterYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(
		(expense) => filterYear === expense.date.getFullYear().toString()
	);

	return (
		<Card className="expense">
			<ExpenseFilter
				selected={filterYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}

export default Expense;
