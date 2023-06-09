import React, { useState } from 'react';
import './ExpensesCSS/Expenses.css';
import ExpenseDate from './ExpenseDate';

export default function Expenses(props) {
	let title = props.title;
	const [Title, setTitle] = useState(title); 

	const onClickHandler = () => {
		setTitle("Updated") 
	};

	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{Title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<h3>
				<button onClick={onClickHandler}>Change Title</button>
			</h3>
		</div>
	);
}
