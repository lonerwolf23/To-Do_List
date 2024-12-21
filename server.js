// Backend: To-Do List Server using Express
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];

// Get all tasks
app.get("/tasks", (req, res) => {
  res.send(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).send("Task text is required.");
  tasks.push(text);
  res.status(201).send({ message: "Task added." });
});

// Delete a task
app.delete("/tasks/:text", (req, res) => {
  const { text } = req.params;
  const index = tasks.indexOf(text);
  if (index === -1) return res.status(404).send("Task not found.");
  tasks.splice(index, 1);
  res.send({ message: "Task deleted." });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
