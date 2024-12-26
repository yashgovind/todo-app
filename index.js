import express, { Router } from "express";
const app = express();
const port = process.env.PORT;
const router = express.Router();
import {tasks}  from "./router.js";
app.use(express.json());
app.use("/api/v1/tasks", tasks);


app.listen(port, () => {
    console.log(`listening at port ${port}`);
});
