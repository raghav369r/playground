import { Request, Response } from "express";
import { signToken } from "../services/jwt";
let users = [
  { id: 1, name: "name-1", password: "pass-1", email: "email-1@gmail.com" },
  { id: 2, name: "name-2", password: "pass-2", email: "email-2@gmail.com" },
  { id: 3, name: "name-3", password: "pass-3", email: "email-3@gmail.com" },
];
// Request<{},{},{email:string,password:string}> can specify type of req.body
export const login = (req: Request, res: Response) => {
  const { password, email } = req.body;
  const user = users.find((u) => u.email == email);
  if (!user)
    res.status(401).json({ message: "email or password not matched!!" });
  else if (password == user.password)
    res.status(200).json({
      message: "Login success",
      token: signToken({ id: user.id, email: user.email }),
    });
  else res.status(401).json({ message: "email or password not matched!!" });
};
export const register = (req: Request, res: Response) => {
  res.send("register");
};
