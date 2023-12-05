const mongoose = require("mongoose");
// const Admin = require("../Schemas/AdminSchema"); // Import the Admin model
const localDB = "mongodb://localhost:27017/BabyVac";


mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to database");
  }).catch((e) => {
    console.log(e);
  });
