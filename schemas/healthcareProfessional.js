const mongoose = require("mongoose")
const healthcareProfessionalSchema = mongoose.Schema({
    hcpName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    hcpNIC:{
        type:String,
        required:true,
        unique:true
    },
    hcpPostalCode:{
        type:Number,
        required:true
    },
    hcpEmail:{
        type:String,
        required:true
    },
    hcpUsername:{
        type:String,
        required:true,
        unique:true
    },
    hcpPassword:{
        type:String,
        required:true
    }
})
 module.exports = mongoose.model("Healthcare",healthcareProfessionalSchema)