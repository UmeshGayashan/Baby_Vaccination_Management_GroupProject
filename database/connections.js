const mongoose = require("mongoose");

// // Local Database
// const localDB = "mongodb://localhost:27017/BabyVac";
// mongoose.connect(localDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//     console.log("Connected to database");
//   }).catch((e) => {
//     console.log(e);
//   });


// Remote Database
const AtlasDB = "mongodb+srv://umeshgayashan099:Y9r51EWzruEhUbjt@babyvac.rpmitjz.mongodb.net/";


mongoose.connect(AtlasDB, {
  }).then(() => {
    console.log("Connected to database");
  }).catch((e) => {
    console.log(e);
  });
  