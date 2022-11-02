const express = require("express");
const dbConnect = require("./db/db");
const User = require("./model/User");
const app = express();
const PORT = 5000;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Api");
});

app.post("/register", async (req, res) => {
  const data = req.body;
  const user = new User(data);
  const savedUser = await user.save();
  console.log(savedUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
