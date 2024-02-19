const mongoose = require("mongoose");
// const Admin = require("../Schemas/AdminSchema"); // Import the Admin model
//const localDB = "mongodb://localhost:27017/BabyVac";
const AtlasDB = "mongodb+srv://telana:telana@baby-vac.bimois7.mongodb.net/baby-vac?retryWrites=true&w=majority";


mongoose.connect(AtlasDB, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to database");
  }).catch((e) => {
    console.log(e);
  });
