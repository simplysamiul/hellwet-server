const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
const app = require(".");


// database connection 
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("database connection is successful".bgBlue)
})


// server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`port listening at $${port}`.bgCyan)
})