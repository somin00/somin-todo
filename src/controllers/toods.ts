import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({
    message: "새 할 일을 추가했습니다.",
    createdTodo: newTodo,
  });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({
    message: "모든 할 일 목록을 가져오는데 성공했습니다.",
    todos: TODOS,
  });
};
