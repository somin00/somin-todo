import React from "react";
import { Todo } from "../todo.model";
import "./TodoList.css";
import { useDispatch } from "react-redux";
import { remove } from "../store/todoSlice";

type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => {
  const dispatch = useDispatch();
  const deleteTodo = (id: string) => {
    dispatch(remove(id));
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};
