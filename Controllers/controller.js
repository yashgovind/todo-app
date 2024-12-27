//main logic here .../

import { todos } from "../Repository/database.js";

const getAllTodo = async (req, res) => {
  const todoItems = await todos.find();
  res.send({ todoItems }).status(201);
};

const deleteTodo = async (req, res) => {
  const todo = await todos.findOneAndDelete({ _id: req.params.id });
  if (todo) {
    res.status(204).send();
  } else {
    return res
      .send("The Todo you are trying to delete does not exist.")
      .status(404);
  }
};

const updateTodo = async (req, res) => {
  const { content, isCompleted, updatedAt, userId } = req.body;

  let todo = await todos.findOneAndUpdate(
    { _id: req.params.id },
    { content, isCompleted, updatedAt, userId },
    { new: true },
  );

  if (todo) {
    res.status(204).send();
  } else {
    res.status(404).send("The Todo you are trying to update does not exist.");
  }
};

const getSingleTodo = async (req, res) => {
  let todo = await todos.findOne({ _id: req.params.id });
  if (!todo) return res.send("No Todo found with the specified Id.").status(404);
  res.status(200).send({ todo });
};

const createTodo = async (req, res) => {
  const { content, isCompleted, userId } = req.body;
  let now = new Date();
  const todo = new todos({
    content: content,
    isCompleted: isCompleted,
    createdAt: now,
    userId: userId,
  });
  await todo.save();
  res.status(201).send({ todo });
};

export { getAllTodo, deleteTodo, createTodo, getSingleTodo, updateTodo };
