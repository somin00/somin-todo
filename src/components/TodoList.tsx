import React from "react";
import { Todo } from "../todo.model";
import "./TodoList.css";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
