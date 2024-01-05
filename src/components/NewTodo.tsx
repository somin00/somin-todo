import React, { useRef, FormEvent } from "react";

type NewTodoProps = {
  addTodo: (text: string) => void;
};

export const NewTodo = ({ addTodo }: NewTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodoText = (inputRef.current as HTMLInputElement).value;
    addTodo(newTodoText);
  };

  return (
    <form onSubmit={submitTodo}>
      <div>
        <label htmlFor="todo-text">할 일: </label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">추가</button>
    </form>
  );
};
