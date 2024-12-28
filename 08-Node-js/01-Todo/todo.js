// const fs = require("fs");
// const filepath = "./task.json";

// const loadTask = () => {
//   try {
//     const dataBuffer = fs.readFileSync(filepath);
//     const dataJSON = dataBuffer.toString();
//     return JSON.parse(dataJSON);
//   } catch (error) {
//     return [];
//   }
// };

// const saveTask = (tasks) => {
//   const dataJSON = JSON.stringify(tasks);
//   fs.writeFileSync(filepath, dataJSON);
// };

// const addTask = (task) => {
//   const tasks = loadTask();
//   tasks.push(task);
//   saveTask(tasks);
// };

// const command = process.argv[2];
// const argument = process.argv[3];

// if (command === "add") {
//   addTask(argument);
// } else if (command === "list") {
//   listTask();
// } else if (command === "remove") {
//   removeTask(argument);
// } else {
//   console.log("Command not found !");
// }

console.log("Hello World");
