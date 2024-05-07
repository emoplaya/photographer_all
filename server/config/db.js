const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/photographer";

const connectToDb = async () => {
  await mongoose.connect(URL).then(() => console.log("connected"));
};

module.exports = { connectToDb };
