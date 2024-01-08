import { createConnection, Connection, ConnectionOptions } from "mysql2";
import { DB_NAME, DB_PWD } from "../server";

const db_info: ConnectionOptions = {
  host: "localhost",
  port: 0,
  user: "root",
  password: DB_PWD,
  database: DB_NAME,
};

function init(): Connection {
  return createConnection(db_info);
}

function connect(conn: { connect: (arg0: (err: any) => void) => void }) {
  conn.connect(function (err) {
    if (err) console.error("mysql connection error : " + err);
    else console.log("mysql is connected successfully!");
  });
}

export { init, connect };
