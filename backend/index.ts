import express, { Request, Response } from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import codeRouter from "./routes/code";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/code", codeRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "ok" });
});

app.listen(3000, () => {
  console.log("server runnning at port:", 3000);
});
