const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Db Connected");
  } catch (err) {
    console.log("Db Error", err);
  }
};

module.exports = dbConnect;
