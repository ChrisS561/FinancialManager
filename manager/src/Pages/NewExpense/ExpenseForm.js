import React, { useState } from 'react';
import '../Expenses/ExpensesCSS/ExpenseForm.css';

export default function ExpenseForm(props) {
	const min_num = '0.01';
	const min_step = '0.01';
	const min_date = '2019-01-01';
	const max_date = '2030-12-31';

	const [firstName, setFirstName] = useState('');
	const [amount, setAmount] = useState(0);
	const [newDate, setDate] = useState('');
	const [screen, setScreen] = useState(true);

	const nameChangeHandler = (e) => {
		setFirstName(e.target.value);
	};

	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setDate(e.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expense = {
			title: firstName,
			amount: +amount,
			date: new Date(newDate),
		};
		props.onSaveExpenseData(expense);
		setFirstName('');
		setAmount(0);
		setDate('');
		setScreen(true)
	};


	const handleScreen = () => {
		setScreen(false);
	};

	const new_form = (
		<button onClick={handleScreen} className="new-expense__actions">
			Add new Expense
		</button>
	);
	return (
		<>
			{screen && new_form}
			{!screen && (
				<div>
					<div className="new-expense__actions">
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
								<div className="new-expense__control">
									<label>Amount</label>
									<input
										type="number"
										className="new-expense__input"
										min={min_num}
										step={min_step}
										onChange={amountChangeHandler}
										value={amount}
									/>
								</div>
								<div className="new-expense__control">
									<label>Date</label>
									<input
										type="date"
										className="new-expense__input"
										min={min_date}
										max={max_date}
										onChange={dateChangeHandler}
										value={newDate}
									/>
								</div>
							</div>
							<div className="new-expense__actions">
								<button type="submit">Add Expense</button>
							</div>
						</form>
						<div className="new-expense__actions">
							<button onClick={setScreen}>Cancel</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
