const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ParentSchema = require("../schemas/guardianSchema");

const router = express.Router();

// create the Login route for parent
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the parent account by username
    const parent = await ParentSchema.findOne({ parentAccountUsername: username });

    // If parent account not found
    if (!parent) {
      return res.status(404).send('Parent account not found');
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, parent.parentAccountPassword);

    if (!passwordMatch) {
      return res.status(401).send('Invalid password');
    }

    // Generate JWT
    const token = jwt.sign({ username: parent.parentAccountUsername, id: parent._id }, 'secretKey');

    // Send token to client
    res.json({ token });
  } catch (err) {
    res.status(500).send('Login failed: ' + err.message);
  }
});

module.exports = router;