import './ExpenseItem.css'

const ExpenseItem = (_) => {
	const expenseDate = new Date(2023, 2, 28);
	const expenseTitle = "Car Insurance";
	const expensePrice = 256.67;

	return (
		<div className="expense-item">
			<div>{expenseDate.toISOString()}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className='expense-item__price'>${expensePrice}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;