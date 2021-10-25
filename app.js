const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require('./config/db');

const app = express();

// bring routes

const tasks = require("./routes/tasks");

// middlewares

app.use(express.static('./public'))
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello From Taskmanager");
});

// Database Connection

connectDB();

app.use("/api/v1/tasks", tasks);


const port = 4000;

app.listen(port, console.log(`Server is running on port ${port}`.bgYellow.bold));
