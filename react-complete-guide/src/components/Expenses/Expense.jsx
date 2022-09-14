import React, { useState } from 'react';
import './Expense.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expense(props) {
	const [filterYear, setFilterYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(
		(expense) => filterYear === expense.date.getFullYear().toString()
	);

	return (
		<Card className="expenses">
			<ExpenseFilter
				selected={filterYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}

export default Expense;
