const { getAllTasks, getSpecificTask, createTask, updateTask, deleteTask } = require("../controllers/task.controller");

const router = require("express").Router();

// get all tasks
router.route("/alltasks")
.get(getAllTasks)

// create data
router.route("/task")
.post(createTask)

// get specific data
router.route("/task/:id")
.get(getSpecificTask)
.patch(updateTask)
.delete(deleteTask)



module.exports = router;