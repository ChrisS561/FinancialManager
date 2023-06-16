import React, { useState } from 'react';
import Expenses from './Expenses';
import './ExpensesCSS/Test.css';
import ExpensesFilter from './NewExpense/ExpensesFilter';

export default function Test(props) {
	const [filteredYear, setFilteredYear] = useState('');

	const filteredYearHandler = (data) => {
		console.log(data);
		setFilteredYear(data);
	};

	return (
		<div>
			<div className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onFilteredChange={filteredYearHandler}
				/>
				{props.items.map((expense) => (
					<Expenses
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date} // Fix typo here
					/>
				))}
			</div>
		</div>
	);
}
