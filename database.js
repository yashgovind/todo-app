import mongoose from "mongoose";
const url = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(url);


//todos schema and user schema here  -->

const todoSchema = {
    id: String,
    content: String,
    Iscompleted: String,
    UpdatedAt: Date,
    CreatedAt: Date,
    UserId : String
}

const userSchema = {
    id: String,
    username: String,
    password:String
}


const todos = mongoose.model("Todos", todoSchema);
const users = mongoose.model("Users", userSchema);

module.exports = {
    users,todos
}