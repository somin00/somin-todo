import { useDispatch } from "react-redux";
import { Todo } from "../todo.model";
import "./TodoItem.css";
import { AppDispatch } from "../store";
import { removeTodo, updateTodo } from "../store/todoAsynSlice";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch: AppDispatch = useDispatch();

  const toggleCheckTodo = () => {
    const updateData = { id: todo.id, text: todo.text, checked: !todo.checked };
    dispatch(updateTodo(updateData));
  };

  const deleteTodo = () => {
    dispatch(removeTodo(todo.id));
  };
  return (
    <li>
      <input type="checkbox" id="todoCheck" checked={todo.checked} onChange={toggleCheckTodo} />
      <label htmlFor="todoCheck" className="todo-label">
        <span className={todo.checked ? "is-complete" : ""}>{todo.text}</span>
      </label>
      <button onClick={deleteTodo}>삭제</button>
    </li>
  );
};
