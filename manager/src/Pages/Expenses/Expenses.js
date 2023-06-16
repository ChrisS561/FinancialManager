import React, { useState } from 'react';
import './ExpensesCSS/Expenses.css';
import ExpenseDate from './ExpenseDate';

export default function Expenses(props) {
	



	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<h3>
			</h3>
		</div>
	);
}
