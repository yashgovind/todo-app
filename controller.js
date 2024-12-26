//main logic here .../

import { users, todos } from "./database.js";


const getAllTask = async (req, res) => {
    const tasks =  await todos.find();
    if (!tasks) return res.send("ERROR FOUND").status(404);
    res.send({ tasks }).status(201); 
}

const DeleteTask = async (req, res) => {
    const task= await todos.findOneAndDelete(id:req.params.id);
    if (task) {
        res.send(task).status(200);
    }
    else {
        return res.send("ERROR FOUND").status(404);
   }
}

const UpdateTask =async  (req, res) => {
    const {content, Iscompleted, UpdatedAt, CreatedAt, UserId } = req.body;
    let task = await  todos.findOneAndUpdate({ id: req.params.id }  ,{content,Iscompleted,UpdatedAt,CreatedAt,UserId},  { new: true });
    res.status(200).send({ task });
}

const getSingleTask = async (req, res) => {
     let tasks =await  todos.findOne({ id: req.params.id });
     res.status(200).send({ tasks });
}

const createTask = async(req, res) => {
    const { id, content, Iscompleted, UpdatedAt, CreatedAt, UserId } = req.body;
    const task = new todos({
        id,
        content,
        Iscompleted,
        UpdatedAt,
        CreatedAt,
        UserId,
    });
    await task.save();
    res.send(200).send({ task });
}


module.exports = {
    getAllTask, DeleteTask, createTask, getSingleTask, UpdateTask
};


