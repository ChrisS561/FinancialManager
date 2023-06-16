import React from 'react';
import '../ExpensesCSS/NewExpenses.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
	const saveExpenseDataHandler = ( enteredExpenseData) => { 
		const expenses = { 
			...enteredExpenseData, 
			id: Math.random().toString()
		}
		props.onAddExpense(expenses);
	}

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
		</div>
	);
}
