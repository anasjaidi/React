import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2023");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	
	const filtredExpenses = props.items.filter(exp => exp.date.getFullYear() == filteredYear);

	var expensesContent = <p>No Expnses found.</p>;

	if (filtredExpenses.length > 0) {
		expensesContent = filtredExpenses.map((exp) => (
			<ExpenseItem
				title={exp.title}
				amount={exp.amount}
				date={exp.date}
				key={exp.id}
			/>
		)); 
	}
	
	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{/* {filtredExpenses.length == 0 ? <p>No Expnses found.</p> : filtredExpenses.map((exp) => (<ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id} />))} */}
			{/* {!filtredExpenses.length && <p>No Expnses found.</p>}; */}
			{/* {filtredExpenses.length && filtredExpenses.map((exp) => (<ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id}/>))} */}
			{expensesContent}
		</Card>
	);
}
