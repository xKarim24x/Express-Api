import express, { json } from "express";
import cors from "cors";
import apiRouter from "./routes/users";

const app = express();

app.use(cors());

app.use(json());

app.use("/users", apiRouter);

app.get("/", (req, res) => {
  res.send("Express on vercel");
});

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "3000"}`);
});
