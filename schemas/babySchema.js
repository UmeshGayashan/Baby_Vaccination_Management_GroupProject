const mongoose = require("mongoose")
const babySchema = mongoose.Schema({
    babyName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    motherorGuardianNIC:{
        type:String,
        required:true,
    },
    fatherName:{
        type:String,
    },
    fatherNic:{
        type:String,
    },
    bid:{
        type:Number,
        required:true,
        unique:true
    },
    gender:
    { 
        type: String, 
        required: true 
    },
    ofc: 
    { 
        type: String 
    }, 
    birthTime: 
    { 
        type: String, 
        required: true 
    },
    birthDate: 
    { 
        type: Date, 
        required: true 
    },
    weight: 
    { 
        type: Number, 
        required: true 
    },
    hospitalName: 
    { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model("Baby",babySchema);