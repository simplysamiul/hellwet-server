const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// use middleware
app.use(cors());
app.use(express.json());

// Schema design
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, `Please provie a title for this task ..!`],
        minLength: [10, "Title must be 10 characters..!"],
        maxLength: [30, "Title mis too large..!"]
        
    },
    description: {
        type: String,
        required: [true, "Need description for this task...!"]
    },
    dueDate: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Need to user email..!"]
    }
}, { timestamps: true });

// model 
const Task = mongoose.model("Task", TaskSchema)

// post data in data base 
app.post("/api/v1/task", async(req, res) => {
    try {
        const result = await Task.create(req.body);
        res.status(200).json({
            status: true,
            message: "Task insertated successfully..!",
            data: result
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
});

// root route
app.get("/", (req, res) => {
    res.send("Server running successfully...!");
});


module.exports = app;
