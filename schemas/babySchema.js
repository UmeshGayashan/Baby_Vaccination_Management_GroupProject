const mongoose = require("mongoose")
const guardianSchema = mongoose.Schema({
    motherorGuardianNIC:{
        type:String,
        required:true,
        unique:true
    },
    gender:
    { 
        type: String, 
        required: true 
    },
    ofc: { 
        type: String 
    }, 
    birthTime: { 
        type: String, 
        required: true 
    },
    birthDate: { 
        type: Date, 
        required: true 
    },
    weight: { 
        type: Number, 
        required: true 
    },
      hospitalName: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model("Baby",babySchema);