import React, { useRef, FormEvent } from "react";
import "./NewTodo.css";
import { useDispatch } from "react-redux";
import { add } from "../store/todoSlice";

export const NewTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const submitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodoText = (inputRef.current as HTMLInputElement).value;
    dispatch(add(newTodoText));
    (inputRef.current as HTMLInputElement).value = "";
  };

  return (
    <form onSubmit={submitTodo}>
      <div className="form-control">
        <label htmlFor="todo-text">할 일: </label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">추가</button>
    </form>
  );
};
