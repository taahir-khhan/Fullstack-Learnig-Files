const fs = require("fs");
const os = require("os");

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./logFile.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toDateString()} - ${event.message} \n`;
  fs.appendFileSync(logFile, logMessage);
};

logger.on("message", logToFile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}%`);
}, 1500);

logger.log("Application started");
logger.log("Application event occurred");

// Keep the process alive
process.stdin.resume();
