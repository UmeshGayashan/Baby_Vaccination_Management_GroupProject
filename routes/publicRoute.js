const express = require("express")
const router = express.Router()
const userSchema = require("../schemas/userSchema")
const guardianSchema = require("../schemas/guardianSchema")
const healthcareProfessionalSchema = require("../schemas/healthcareProfessional")
const { generateToken } = require("../extra/JWT")

// Registration Route
router.post("/register", async (req, res) => {
    try {
      const { firstName, lastName, email, username, password } = req.body;
      console.log("Hello");
  
      // Create a new user document
      const newUser = new userSchema({
        name: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        username: username,
        password: password,
      });
      console.log(newUser);
      
  
      // Save the user to the database using async/await
      const savedUser = await newUser.save();
  
      return res.send(newUser); // Send HTTP 201 for resource creation along with the saved user's data
    } catch (err) {
      return res.status(500).send("User registration failed: " + err.message); // Handle database errors
    }
  });

  // Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username == "" || password == "") {
      return res.status(400).send("Username and Password required");
    }

    // Use async/await to find a user by username and password
    const user = await userSchema.findOne({
      username: username,
      password: password,
    });

    const guardian = await guardianSchema.findOne({
      parentAccountUsername: username,
      parentAccountPassword: password,
    });

    const healthcareProfessional = await healthcareProfessionalSchema.findOne({
      hcpUsername: username,
      hcpPassword: password,
    });

    if (user) {
      // Generate and send JWT token for authentication
      const token = generateToken(user._id);
      return res.status(200).json({ userType: "User", token: token });
    } else if (guardian) {
      const token = generateToken(guardian._id);
      return res.status(200).json({ userType: "Guardian" , token: token});
      //return res.status(200).json({ token: generateToken(user._id) });
    } else if (healthcareProfessional) {
      const token = generateToken(healthcareProfessional._id);
      return res.status(200).json({ userType: "Healthcare Professional", token: token });
      //return res.status(200).json({ token: generateToken(user._id) });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (err) {
    return res.status(500).send("Login failed: " + err.message); // Handle DB error
  }
 
});

module.exports = router;