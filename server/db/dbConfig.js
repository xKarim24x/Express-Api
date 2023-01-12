import { createPool } from "mysql";

const pool = createPool({
  connectionLimit: 10,
  user: "bfc342825cd435",
  password: "5e9620de",
  database: "heroku_87e4e9c087d91f8",
  host: "us-cdbr-east-06.cleardb.net",
  port: "3306",
});

export default pool;