import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) return;
    addExpense({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
    });
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm