import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 7000;
app.use(express.json());

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
