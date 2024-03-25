const jwt = require("jsonwebtoken")

const key = "privateKey";

const generateToken = (userID) =>{
    const token = jwt.sign({
        userID:userID
    },key)

    return token;
}

console.log(generateToken("token"))