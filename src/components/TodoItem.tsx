import { useDispatch } from "react-redux";
import { remove } from "../store/todoSlice";
import { Todo } from "../todo.model";
import "./TodoItem.css";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();
  const deleteTodo = (id: string) => {
    dispatch(remove(id));
  };
  return (
    <li key={todo.id}>
      <input type="checkbox" id="todoCheck" />
      <label htmlFor="todoCheck" className="todo-label">
        <span>{todo.text}</span>
      </label>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        삭제
      </button>
    </li>
  );
};
