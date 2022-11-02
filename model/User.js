const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  pin: String,
  branchName: String,
  phoneNumber: Number,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
