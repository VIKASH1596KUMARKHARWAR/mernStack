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

connectToDatabase('week3_4');
