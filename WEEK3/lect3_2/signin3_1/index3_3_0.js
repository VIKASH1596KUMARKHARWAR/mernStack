//corresponding to the week3_3

const express = require("express")
const mongoose = require("mongoose");
const { use } = require("react");
const app = express();

const port = 3000;

// const url = "mongodb+srv://amitsbz1596:amitsbz1596@cluster0.vbkxe.mongodb.net/week3_3"

mongoose.connect("mongodb+srv://amitsbz1596:vikash1596@cluster0.vbkxe.mongodb.net/week3_3")
.then(() => console.log("Connected to MongoDB"))

const User = mongoose.model('User',{nmae:String,email:String,password:String})

const user = new User({
    name:"Harkirat Singh",
    email:"harkirat@gmail.com",
    password:"123456"
});

user.save()