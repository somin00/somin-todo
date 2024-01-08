import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
import { json } from "body-parser";
import cors from "cors";

type StaticOrigin = boolean | string | RegExp | (boolean | string | RegExp)[];

const app = express();

const whitelist: string[] = ["http://localhost:3000"];

app.use(json()); //수신하는 요청의 body를 json 형태로 변환하는 미들웨어

app.use(
  cors({
    origin(req: string | undefined, res: (err: Error | null, origin?: StaticOrigin | undefined) => void) {
      console.log("접속된 주소: " + req),
        -1 == whitelist.indexOf(req || "") && req ? res(Error("허가되지 않은 주소입니다.")) : res(null, !0);
    },
    credentials: !0,
    optionsSuccessStatus: 200,
  })
);

app.use("/todos", todoRoutes); //todos 경로로 들어오는 요청 처리 라우트를 todoRoutes로 지정

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
}); //다른 미들웨어에서 오류 발생하면 처리하는 미들웨어

app.listen(5000);
