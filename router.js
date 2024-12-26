import express from "express";
const router = express.Router();

import {getAllTask,getSingleTask,createTask,UpdateTask,DeleteTask } from "./controller.js"


router.route("/").get(getAllTask).post(createTask);

router.route("/:id").get(getSingleTask).put(UpdateTask).delete(DeleteTask);


export default router;