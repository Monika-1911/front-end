import React from "react";

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <div className="expense-item">
      <div>
        <h3>{expense.title}</h3>
        <p>
          {expense.category} | {expense.date}
        </p>
      </div>
      <div>
        <span>₹{expense.amount.toFixed(2)}</span>
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItem;