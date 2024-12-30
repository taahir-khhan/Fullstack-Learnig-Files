import express from "express";

const app = express();
const port = 4000;

const userData = [];
let id = 100;

app.post("/users", (req, res) => {
  const { name, address } = req.body;
  const newUser = { userId: id++, name, address };
  userData.push(newUser);
  res.status(200).send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
