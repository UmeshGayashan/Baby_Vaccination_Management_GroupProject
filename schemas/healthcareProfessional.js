const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const healthcareProfessionalSchema = mongoose.Schema({
    hcpName:{
        type:String,
        required:true
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
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
});

// Hash password before saving to the database
healthcareProfessionalSchema.pre('save', async function(next) {
    const saltRounds = 10;
    try {
        if (this.isModified('hcpPassword')) {
            const hashedPassword = await bcrypt.hash(this.hcpPassword, saltRounds);
            this.hcpPassword = hashedPassword;
        }
        next();
    } catch (err) {
        next(err);
    }
});
 module.exports = mongoose.model("Healthcare",healthcareProfessionalSchema)