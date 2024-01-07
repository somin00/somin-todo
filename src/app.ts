import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
import { json } from "body-parser";

const app = express();

app.use(json()); //수신하는 요청의 body를 json 형태로 변환하는 미들웨어

app.use("/todos", todoRoutes); //todos 경로로 들어오는 요청 처리 라우트를 todoRoutes로 지정

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
}); //다른 미들웨어에서 오류 발생하면 처리하는 미들웨어

app.listen(3000);
