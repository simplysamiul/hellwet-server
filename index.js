const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task.route")

// use middleware
app.use(cors());
app.use(express.json());

// use routes
app.use("/api/v1", taskRoute);

// root route
app.get("/", (req, res) => {
    res.send("Server running successfully...!");
});


module.exports = app;
