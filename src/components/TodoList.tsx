import React from "react";

type TodoListProps = {
  items: {
    id: string;
    text: string;
  }[];
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
