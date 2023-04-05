const mongoose = require("mongoose");

// Schema design
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, `Please provie a title for this task ..!`],
        minLength: [10, "Title must be 10 characters..!"],
        maxLength: [50, "Title mis too large..!"]
        
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
const Task = mongoose.model("Task", TaskSchema);


module.exports = Task