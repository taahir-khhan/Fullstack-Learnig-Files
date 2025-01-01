// To execute this code, run this command, node 01-Todo/todo.js add "add content" at filepath 08-Node-js

const fs = require("fs");
const filepath = "./task.json";

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJSON = dataBuffer.toString();
    console.log(dataJSON);
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTask = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filepath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTask(tasks);
  console.log("Task Added", task);
};

const listTask = () => {
  const tasks = loadTask();
  tasks.map((item, idx) => console.log(`${idx} -> ${item.task}`));
};

const removeTask = (removeIdx) => {
  const tasks = loadTask();
  const filterTask = tasks.filter((item, idx) => idx !== removeIdx);
  saveTask(filterTask);
  console.log(`${tasks[removeIdx].task} is removed`);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTask();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found !");
}
