const mongoose = require("mongoose")
const guardianSchema = mongoose.Schema({
    motherorGuardianName:{
        type:String,
        required:true
    },
    motherorGuardianNIC:{
        type:String,
        required:true,
        unique:true
    },
    Address:{
        type:String
    },
    PostalCode:{
        type:Number,
        required:true
    },
    guardianEmail:{
        type:String,
    },
    guardianTelephoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    parentAccountUsername:{
        type:String,
        required:true,
        unique:true
    },
    parentAccountPassword:{
        type:String,
        required:true
    }
})
 module.exports = mongoose.model("Parent",guardianSchema)