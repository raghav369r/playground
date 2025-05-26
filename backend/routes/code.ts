import express, { Router } from "express";
import { runCode } from "../controllers/code";
const codeRouter: Router = express.Router();
codeRouter.post("/run", runCode);

export default codeRouter;
