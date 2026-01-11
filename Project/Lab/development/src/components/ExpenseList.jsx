import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = ({ expenses, deleteExpense }) => {
  if (expenses.length === 0) return <p>No expenses yet.</p>;

  return (
    <div className="expense-list">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} deleteExpense={deleteExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;