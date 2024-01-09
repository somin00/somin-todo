import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { fetchTodo } from "./store/todoAsynSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const todos = useSelector((state: RootState) => {
    return state.asyncTodoThunk.value;
  });

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <>
      <NewTodo />
      <TodoList todos={todos} />
    </>
  );
};
export default App;
