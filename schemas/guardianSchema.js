const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


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
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
});

// Hash password before saving to the database
guardianSchema.pre('save', async function(next) {
    const saltRounds = 10;
    try {
        if (this.isModified('parentAccountPassword')) {
            const hashedPassword = await bcrypt.hash(this.parentAccountPassword, saltRounds);
            this.parentAccountPassword = hashedPassword;
        }
        next();
    } catch (err) {
        next(err);
    }
});

 module.exports = mongoose.model("Parent",guardianSchema)

 