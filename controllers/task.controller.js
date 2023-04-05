const Task = require("../models/Task");
const { getTasksService, getSpecificTaskService, createTaskService, updateTaskService, deleteTaskService } = require("../services/task.services");


exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await getTasksService();
        res.status(200).json({
            status: true,
            message: "Data got successfully...!",
            data: tasks
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Data not found...!",
            error: error.message
        })
    }
};

exports.getSpecificTask = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await getSpecificTaskService(id);
        res.status(200).json({
            status: true,
            message: "Data got successfully..!",
            data: result
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status: false,
            message: "Data not found...!",
            error: error.message
        })
    }
};


exports.createTask = async (req, res) => {
    try {
        const result = await createTaskService(req.body);
        res.status(200).json({
            status: true,
            message: "Task create successfully..!",
            data: result
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status: false,
            message: "Failed to create task...!",
            error: error.message
        })
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateTaskService(id, req.body);
        res.status(200).json({
            status: true,
            message: "Task update successfully..!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Task couldn't update...!",
            error: error.message
        })
        
    }
};


exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteTaskService(id);
        res.status(200).json({
            status: true,
            message: "Successfully deleted Task...!",
            data: result
        })
        
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Task couldn't delete...!",
            error: error.message
        })
    }
}