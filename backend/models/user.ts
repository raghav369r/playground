import mongoose, { Model, Schema } from "mongoose";

interface Iuser {
  userName: string;
  email: string;
  password: string;
  provider: string;
  createdAt: Date;
  providerId: string;
}
const userSchema: Schema<Iuser> = new mongoose.Schema<Iuser>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  provider: {
    type: String,
    default: "none",
  },
  createdAt: { type: Date, default: Date.now() },
  providerId: String,
});

export const User: Model<Iuser> = mongoose.model<Iuser>("user", userSchema);
