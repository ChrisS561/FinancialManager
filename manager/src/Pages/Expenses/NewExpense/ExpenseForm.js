import React, { useState } from 'react';
import '../ExpensesCSS/ExpenseForm.css';

export default function ExpenseForm() {
	const min_num = '0.01';
	const min_step = '0.01';
	const min_date = '2019-01-01';
	const max_date = '2030-12-31';

	const [firstName, setfirstName] = useState(' ');
	const [amount, setAmount] = useState(0);
	const [new_date, setDate] = useState(' ');

	console.log(firstName);
	console.log(amount);
	console.log(new_date);

	const nameChangeHandler = (e) => {
		setfirstName(e.target.value);
	};
	const amountChangeHanlder = (e) => {
		setAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setDate(e.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenses = {
			title: firstName,
			amount: amount,
			date: new Date(new_date),
		};
		console.log(expenses);
		//Allows to reset the input after the form has been submitted. 
		setfirstName(""); 
		setAmount(0);
		setDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						className="new-expense__input"
						onChange={nameChangeHandler}
						value={firstName}
					/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						className="new-expense__input"
						min={min_num}
						step={min_step}
						onChange={amountChangeHanlder}
						value={amount}
					/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						className="new-expense__input"
						min={min_date}
						max={max_date}
						onChange={dateChangeHandler}
						value={new_date}
					/>
				</div>
			</div>
			<div className="new-expense__actions"></div>
			<button type="submit">Add Expenses</button>
		</form>
	);
}
