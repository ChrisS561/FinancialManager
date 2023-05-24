import React from "react";
import "./Tracking.css";

export default function Tracking() {
	const expensesdate = new Date(2023, 2, 28);
	const expensestitle = "Car Insurace";
	const expensesAmount = 256.67;

	return (
		<div className="header">
			Tracking
			<div className="expense-item">
				<div>{expensesdate.toISOString()}</div>
				<div className="expense-item__description">
					<h2>{expensestitle}</h2>
					<div className="expenses-item__price">{expensesAmount}</div>
				</div>
			</div>
		</div>
	);
}
