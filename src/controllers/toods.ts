import { RequestHandler } from "express";
import { init } from "../config/mysql";
import { Connection } from "mysql2";

const connection: Connection = init();

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const sql = `insert into todos (id, text, checked) values(?,?,?)`;
  const params = [Math.random().toString(), text, false];
  connection.query(sql, params, (error, results) => {
    if (error) {
      throw new Error("데이터 추가 실패");
    }
    res.status(201).json({
      message: "할 일 추가 성공",
      todos: {
        id: params[0],
        text,
        checked: false,
      },
    });
  });
};

export const getTodos: RequestHandler = (req, res, next) => {
  const sql = "select * from todos";
  connection.query(sql, (error, results) => {
    if (error) {
      throw new Error("데이터 불러오기 실패");
    }
    res.status(200).json({
      message: "모든 할 일 목록 불러오기 성공",
      todos: results,
    });
  });
};

//url params type
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updateText = (req.body as { text: string }).text;
  const isComplete = (req.body as { checked: boolean }).checked;

  const sql = "update todos set id=?, text=?, checked=? where id=" + todoId;
  const params = [todoId, updateText, isComplete];

  connection.query(sql, params, (error, results) => {
    if (error) {
      throw new Error("데이터 수정 실패");
    }
    res.json({
      message: "할 일 수정 성공",
      todos: {
        id: todoId,
        text: updateText,
        checked: isComplete,
      },
    });
  });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const sql = "delete from todos where id=" + todoId;

  connection.query(sql, (error, results) => {
    if (error) {
      throw new Error("데이터 삭제 실패");
    }
    res.json({
      message: "할 일 삭제 성공",
    });
  });
};
