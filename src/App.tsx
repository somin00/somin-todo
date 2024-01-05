import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./todo.model";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };
  const deleteTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <NewTodo addTodo={addTodo} />
      <TodoList items={todos} deleteTodo={deleteTodo} />
    </>
  );
};
export default App;
