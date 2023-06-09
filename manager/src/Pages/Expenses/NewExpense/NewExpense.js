import React from 'react';
import '../ExpensesCSS/NewExpenses.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense() {
	return (
		<div className="new-expense">
			<ExpenseForm/>
			<form></form>
		</div>
	);
}
