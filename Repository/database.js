import mongoose from "mongoose";
import { url } from "../Utils/Constants.js";

mongoose.connect(url);

//todos schema and user schema here  -->

const todoSchema = {
  id: String,
  content: String,
  isCompleted: Boolean,
  updatedAt: Date,
  createdAt: Date,
  userId: String,
};

const userSchema = {
  id: String,
  username: String,
  password: String,
};

const todos = mongoose.model("Todos", todoSchema);
const users = mongoose.model("Users", userSchema);

export { todos, users };
