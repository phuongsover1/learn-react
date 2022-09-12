import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem(props) {
	// let title = props.title;
	const [title, setTitle] = useState(props.title);
	const [amount, setAmount] = useState(props.amount);
	const clickHandler = () => {
		console.log('Clicked !!!!!');
		setTitle('Updated!!');

		setAmount(123);
		// title = 'updated';
		console.log(title); // old value
		// title = 'Updated !!!';
	}
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{amount}</div>
			</div>
			<button type="" onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
