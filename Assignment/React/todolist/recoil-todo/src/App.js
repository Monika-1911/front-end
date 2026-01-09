import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


function App() {
  return (
    <div style={{ width: 400, margin: "40px auto", textAlign: "center" }}>
      <h2>Todo App</h2>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
