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

	return (
		<Card className="expense">
			<ExpenseFilter
				selected={filterYear}
				onChangeFilter={filterChangeHandler}
			/>

			{props.items.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
}

export default Expense;
