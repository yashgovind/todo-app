import express from "express";
const router = express.Router();

import {
  getAllTodo,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../Controllers/controller.js";

router.get("/", getAllTodo);

router.get("/:id", getSingleTodo);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export { router };
