import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./todo.model";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };
  return (
    <>
      <NewTodo addTodo={addTodo} />
      <TodoList items={todos} />
    </>
  );
};
export default App;
