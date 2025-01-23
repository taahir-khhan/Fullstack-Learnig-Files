// ========= Performing CRUD Opeartion in file =========
// To execute this code, run this command, node 01-Todo/todo.js add "add content" at filepath 08-Node-js

import fs from "fs";
const filepath = "./task.json";

// ---- These are the functionalities we used to run the commands ----
const loadTask = () => {
  try {
    // ----- Data is readed, and come in byte format ----
    const dataBuffer = fs.readFileSync(filepath);

    // ---- To make it more readable format we convert it to string format first ----
    const dataJSON = dataBuffer.toString();

    // ---- Then we are parsing it into JSON format ----
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTask = (tasks) => {
  // ---- Before writing into file system, we coverting it to string format ----
  const dataJSON = JSON.stringify(tasks);

  // ---- Then writing the data into the file ----
  fs.writeFileSync(filepath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTask(tasks);
  console.log("Task Added successfully");
};

const listTask = () => {
  const tasks = loadTask();
  tasks.map((item, idx) => console.log(`${idx} -> ${item.task}`));
};

const removeTask = (removeIdx) => {
  const tasks = loadTask();
  const filteredTask = tasks.filter((item, idx) => idx !== removeIdx);
  saveTask(filteredTask);
  console.log(`${tasks[removeIdx].task} is removed`);
};

// ---- This is the command you want to execute extracted from command line ----
const command = process.argv[2];

// ---- This is the value also extracted from command line ----
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
