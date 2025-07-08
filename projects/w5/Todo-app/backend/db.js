    /*
Title{
    title:string;
    description:string;
    completed:boolean
}
    */

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://amitsbz1596:vikash1596@cluster0.vbkxe.mongodb.net/todos");

const todoSchema= mongoose.Schema({
    title:String,
    description:String,
    // complete:Boolean
    completed: { type: Boolean, default: false }
}) 

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
    // todo:todo

}