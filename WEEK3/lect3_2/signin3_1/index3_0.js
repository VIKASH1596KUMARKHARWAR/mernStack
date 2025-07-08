// week3.2 and showing the entry to database


const express = require("express");
const mongoose = require('mongoose');

const connectionUri = 'mongodb+srv://amitsbz1596:vikash1596@cluster0.vbkxe.mongodb.net/';

async function connectToDatabase(dbName) {
    try {
        const connection = await mongoose.createConnection(`${connectionUri}${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to the ${dbName} database!`);
        return connection;
    } catch (err) {
        console.error(`Failed to connect to the ${dbName} database:`, err);
    }
}

// Define a schema and model
async function makeEntry(dbName) {
    const dbConnection = await connectToDatabase(dbName);

    // Define schema
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
    });

    // Create a model
    const User = dbConnection.model('User', userSchema);

    // Insert a document
    const newUser = new User({
        name: "John Doe",
        email: "johndoe@example.com",
        age: 25,
    });

    try {
        const savedUser = await newUser.save();
        console.log("New user added:", savedUser);
    } catch (err) {
        console.error("Error saving user:", err);
    }
}

makeEntry('week3_2');
