import readline from "readline";

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and handle user input
rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close(); // Close the input stream
});
