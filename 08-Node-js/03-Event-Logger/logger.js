const fs = require("fs");
const os = require("os");

/* ========= Custom Logger Class ========= 
  
  - Extends Node.js's EventEmitter class.
  
  - Contains a log method that emits a custom "message" event with a message payload. 
*/
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

// ---- Instance and path setup ----
const logger = new Logger();
const logFilePath = "./logFile.txt";

// ---- Formats the log message with the current date and the event message. Uses fs.appendFileSync to append the log message to the logFile ----
const logToFile = (event) => {
  const logMessage = `${new Date().toDateString()} - ${event.message} \n`;
  fs.appendFileSync(logFilePath, logMessage);
};

// ----  Attaching Event Listener ----
logger.on("message", logToFile);

// ---- Logs the memory usage using the logger.log method in every 1.5 secs ---
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}%`);
}, 1500);

logger.log("Application started");
logger.log("Application event occurred");

// ---- Keep the process alive ----
process.stdin.resume();
