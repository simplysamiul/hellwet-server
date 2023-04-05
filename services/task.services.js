const Task = require("../models/Task");

exports.getTasksService = async () => {
    const result = await Task.find({});
    return result;
};

exports.getSpecificTaskService = async (taskId) => {
    const task = await Task.findById(taskId);
    return task;
};

exports.createTaskService = async (data) => {
    const task = await Task.create(data);
    return task;
};

exports.updateTaskService = async (taskId, data) => {
    const task = await Task.updateOne({ _id: taskId }, { $set: data }, { runValidators: true })
    return task;
};

exports.deleteTaskService = async (taskId) => {
    const task = await Task.deleteOne({ _id: taskId })
    return task;
}