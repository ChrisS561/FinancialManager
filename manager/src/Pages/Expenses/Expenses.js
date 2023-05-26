import React from "react";
import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";

export default function Expenses(props) {
	return (
			<div className="expense-item">
				 <ExpenseDate date={props.date}/>
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">{props.amount}</div>
				</div>
			</div>
	);
}
