const express = require("express")
const router = express.Router()
const userSchema = require("../schemas/userSchema")

// Registration Route
router.post("/register", async (req, res) => {
    try {
      const { name, email, username, password } = req.body;
      console.log("Hello");
  
      // Create a new user document
      const newUser = new userSchema({
        name: name,
        email: email,
        username: username,
        password: password,
      });
      // console.log(newUser);
      
  
      // Save the user to the database using async/await
    //   const savedUser = await newUser.save();
  
      return res.send(newUser); // Send HTTP 201 for resource creation along with the saved user's data
    } catch (err) {
      return res.status(500).send("User registration failed: " + err.message); // Handle database errors
    }
  });

module.exports = router;