import { useDispatch } from "react-redux";
import { remove, toggleCheck } from "../store/todoSlice";
import { Todo } from "../todo.model";
import "./TodoItem.css";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  const toggleCheckTodo = () => {
    dispatch(toggleCheck(todo.id));
  };

  const deleteTodo = () => {
    dispatch(remove(todo.id));
  };
  return (
    <li>
      <input type="checkbox" id="todoCheck" onChange={toggleCheckTodo} />
      <label htmlFor="todoCheck" className="todo-label">
        <span className={todo.checked ? "is-complete" : ""}>{todo.text}</span>
      </label>
      <button onClick={deleteTodo}>삭제</button>
    </li>
  );
};
