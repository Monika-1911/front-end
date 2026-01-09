import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms";

function TodoList() {
  const todos = useRecoilValue(todoListState);
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
