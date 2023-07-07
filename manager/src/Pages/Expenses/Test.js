import React, { useState } from 'react';
import Expenses from './Expenses';
import './ExpensesCSS/Test.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

export default function Test(props) {
	// State for filtered year
	const [filteredYear, setFilteredYear] = useState('');

	// Handler for filtered year change
	const filteredYearHandler = (data) => {
		console.log(data);
		setFilteredYear(data);
	};

	// Filter expenses based on selected year
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let contentExpenses = <p>No Expenses Found</p>;
	if (filteredExpenses.length > 0) {
		contentExpenses = filteredExpenses.map((expense) => (
			<Expenses
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<div className="expenses">
				{/* ExpensesFilter component */}
				<ExpensesFilter
					selected={filteredYear}
					onFilteredChange={filteredYearHandler}
				/>
				{/* <ExpensesChart expense={filteredExpenses}/> */}
				{/* Map over the filtered expenses and render Expenses component */}
				{contentExpenses}
			</div>
		</div>
	);
}
