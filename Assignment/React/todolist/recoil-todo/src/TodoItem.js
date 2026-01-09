import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./atoms";

function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <li style={{ listStyle: "none", margin: "10px 0" }}>
      <span
        onClick={toggleComplete}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo} style={{ marginLeft: 10 }}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
