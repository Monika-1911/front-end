import React from "react";

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="expense-summary">
      <h2>Total Expenses: ₹{total.toFixed(2)}</h2>
    </div>
  );
};

export default ExpenseSummary;