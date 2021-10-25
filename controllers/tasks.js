const Task = require("../models/Task");

// Get All Tasks

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Create New task

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get single task

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    res.status(200).json({ task });

    if (!task) {
      res.status(404).json({ Message: `No task found with id : ${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


// delete task by id

const deleteTask = async(req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndDelete({ _id: taskID });
        res.status(200).json({ message:'Task Deleted Successfully' });
    
        if (!task) {
          res.status(404).json({ Message: `No task found with id : ${taskID}` });
        }
      } catch (error) {
        res.status(500).json({ message: error });
      }
};



// update task by id

const updateTask = async(req, res) => {

    try {

        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body)

        if (!task) {
            res.status(404).json({ Message: `No task found with id : ${taskID}` });
          }

        res.status(200).json({ task});
    
      } catch (error) {
        res.status(500).json({ message: error });
      }

  };

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
