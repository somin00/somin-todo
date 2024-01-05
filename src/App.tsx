import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const todos = useSelector((state: RootState) => {
    return state.todo;
  });
  return (
    <>
      <NewTodo />
      <TodoList todos={todos} />
    </>
  );
};
export default App;
