import "dotenv/config";
import express from "express";
import morgan from "morgan";
import logger from "./logger.js";

const app = express();
const port = process.env.PORT || 7000;
app.use(express.json());

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

const userData = [];
let id = 100;

// add the users
app.post("/users", (req, res) => {
  const { name, address } = req.body;
  const newUser = { userId: id++, name, address };
  userData.push(newUser);
  res.status(200).send(newUser);
});

// Get the list of users
app.get("/users", (req, res) => {
  if (userData.length === 0) {
    res.status(404).send("User not found");
    return;
  }
  res.status(202).send(userData);
});

// Get user by id
app.get("/users/:id", (req, res) => {
  const user = userData.find((item) => item.userId === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.status(200).send(user);
});

// Update a user
app.put("/users/:id", (req, res) => {
  const user = userData.find((item) => item.userId === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send("User not found");
  }

  const { name, address } = req.body;
  user.name = name;
  user.address = address;
  res.status(202).send(user);
});

//Delete a user
app.delete("/users/:id", (req, res) => {
  const index = userData.findIndex(
    (item) => item.userId === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).send("User not found");
  }

  userData.splice(index, 1);
  res.status(202).send(`user is deleted`);
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
