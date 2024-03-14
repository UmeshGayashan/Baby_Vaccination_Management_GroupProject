const mongoose = require('mongoose');
const vaccinationSchema = new mongoose.Schema({
  Bid:{
    type:Number,
    required:true,
    unique:true
  },
  vacname: { 
    type: String,
    required: true 
  },
  vaccinator: { 
    type: String, 
    required: true 
  },
  bottle_code: { 
    type: String,
    required:true,
    unique:true 
  },
  verification_code: { 
    type: String 
  },
  date: { 
    type: Date, 
    required: true 
  },
  place: { 
    type: String 
  },
  motherorGuardianNIC:{
    type:String,
    required:true,
  },
  fatherName:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  }
});
module.exports = mongoose.model("Vaccination",vaccinationSchema);