const mongoose = require("mongoose")
const guardianSchema = mongoose.Schema({
    motherorGuardianName: {
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
        unique:true
    },
    guardianTelephoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    additionalInfo:{
        type:String
    }
})
 module.exports = mongoose.model("Parent",guardianSchema)