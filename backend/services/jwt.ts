import { sign } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET || "";
export const signToken = (data: { id: number; email: string }) => {
  return sign(data, JWT_SECRET);
};
