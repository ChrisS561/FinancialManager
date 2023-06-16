import React, { useState } from 'react';
import Test from './Test';
import NewExpense from './NewExpense/NewExpense';
import { Data } from '../../Library/Expenses';

export default function Tracking() {
	// State for expenses
	const [expenses, setExpenses] = useState(Data);

	// Handler for adding new expense
	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<h1 style={{ textAlign: 'center' }}>
			Tracking
			<div>
				{/* NewExpense component */}
				<NewExpense onAddExpense={addExpenseHandler} />

				{/* Test component */}
				<Test filter={addExpenseHandler} items={expenses} />
			</div>
		</h1>
	);
}
