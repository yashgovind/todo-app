import express, { Router } from "express";
const app = express();
const port = process.env.PORT || 3000;

import {tasks}  from "./router.js";
app.use(express.json());

app.use("/api/v1/tasks", tasks); //tasks routerrrrrrrr routeaaarrrrrr


app.listen(port, () => { // purt is listuning 
    console.log(`listening at port ${port}`);
});
