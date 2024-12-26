//main logic here .../

import { users, todos } from "./database.js";


const getAllTask = (req, res) => {
    const tasks = todos.find().pretty();
    if (!tasks) return res.send("ERROR FOUND").status(404);
    res.send({ tasks }).status(201); 
}

const DeleteTask = (req, res) => {
    // delete req --> /api/v1/tasks/:id
    const task= todos.findOneANdDelete().pretty();
    if (task) {
        res.send(task).status(200);
    }
    else {
        return res.send("ERROR FOUND").status(404);
   }
}

const UpdateTask =async  (req, res) => {
   
    const { id, content, Iscompleted, UpdatedAt, CreatedAt, UserId } = req.body;
    let tasks = todos.findOneAndUpdate({ id: req.body.params.id } ,{UserId:req.body.params.UserId} ,{content,Iscompleted,UpdatedAt,CreatedAt}).pretty();
    res.status(200).send({ tasks });
}

const getSingleTask = (req, res) => {
     let tasks = todos.findOne({ id: req.body.params.id }).pretty();
     res.status(200).send({ tasks });
}

const createTask = (req, res) => {
    const { id, content, Iscompleted, UpdatedAt, CreatedAt, UserId } = req.body;
    const task = todos.create({
        id,
        content,
        Iscompleted,
        UpdatedAt,
        CreatedAt,
        UserId,
    }).pretty();
    res.send(200).send({ task });
}


module.exports = {
    getAllTask, DeleteTask, createTask, getSingleTask, UpdateTask
};


