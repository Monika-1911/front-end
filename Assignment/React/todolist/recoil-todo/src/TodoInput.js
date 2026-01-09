import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atoms";

function TodoInput() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos((oldTodos) => [
      ...oldTodos,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
