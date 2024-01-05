import React from "react";
import { TodoList } from "./components/TodoList";

const App = () => {
  const todos = [{ id: "t1", text: "투두 1" }];
  return (
    <>
      <TodoList items={todos} />
    </>
  );
};
export default App;
