const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ParentSchema = require('../schemas/guardianSchema');
const healthcareProfessionalSchema = require('../schemas/healthcareProfessional');

const router = express.Router();

// Hardcoded admin credentials
const adminUsername = 'admin';
const adminPassword = 'admin_password';

// Parent login route
router.post('/parent-login', async (req, res) => {
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
    const token = jwt.sign({ username: parent.parentAccountUsername, id: parent._id }, process.env.TOKEN_KEY);

    // Send token to client
    res.json({ token });
  } catch (err) {
    res.status(500).send('Login failed: ' + err.message);
  }
});

// Healthcare professional login route
router.post('/healthcare-login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the healthcare professional by username
    const healthcarePro = await healthcareProfessionalSchema.findOne({ hcpUsername: username });

    // If healthcare professional account not found
    if (!healthcarePro) {
      return res.status(404).send('Healthcare professional account not found');
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, healthcarePro.hcpPassword);

    if (!passwordMatch) {
      return res.status(401).send('Invalid password');
    }

    // Generate JWT
    const token = jwt.sign({ username: healthcarePro.hcpUsername, id: healthcarePro._id }, process.env.TOKEN_KEY);

    // Send token to client
    res.json({ token });
  } catch (err) {
    res.status(500).send('Login failed: ' + err.message);
  }
});

// Admin login route
router.post('/admin-login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the provided credentials match the hardcoded admin credentials
    if (username !== adminUsername || password !== adminPassword) {
      return res.status(401).send('Invalid username or password');
    }

    // Generate JWT
    const token = jwt.sign({ username: adminUsername }, process.env.TOKEN_KEY);

    // Send token to client
    res.json({ token });
  } catch (err) {
    res.status(500).send('Login failed: ' + err.message);
  }
});

module.exports = router;
