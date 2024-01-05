import React from "react";
import { Todo } from "../todo.model";

type TodoListProps = {
  items: Todo[];
};

export const TodoList = ({ items }: TodoListProps) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
