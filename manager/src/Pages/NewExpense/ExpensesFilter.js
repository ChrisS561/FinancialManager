import React, { useState } from 'react';
import '../Expenses/ExpensesCSS/ExpensesFilter.css';

const ExpensesFilter = (props) => {
	const [year, setYear] = useState('');

	const changeYearHandler = (event) => {
		setYear(event.target.value);
		props.onFilteredChange(event.target.value);
		console.log(year)
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label htmlFor="year-select">Filter by year</label>
				<select
					id="year-select"
					value={props.selected}
					onChange={changeYearHandler}
				>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
