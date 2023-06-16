import React from "react";
import Test from "./Test";
import NewExpense from "./NewExpense/NewExpense";

export default function Tracking() {
	const Data = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];
	
	const addExpenseHandler = (expense) => { 
		console.log(expense)
		console.log("Tracking")
	}

	return (
		<h1 style={{textAlign: "center"}}>
			Tracking
			<div>
				<NewExpense onAddExpense={addExpenseHandler}/>
				<Test items={Data} />
			</div>
		</h1>
	);
}
