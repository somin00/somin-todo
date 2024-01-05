import React from "react";
import { Todo } from "../todo.model";

type TodoListProps = {
  items: Todo[];
  deleteTodo: (id: string) => void;
};

export const TodoList = ({ items, deleteTodo }: TodoListProps) => {
  return (
    <ul>
      {items.map((todo) => (
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
