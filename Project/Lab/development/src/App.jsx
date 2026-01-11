import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import ExpenseSummary from "./components/ExpenseSummary.jsx";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;