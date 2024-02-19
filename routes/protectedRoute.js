//Use the authenticateToken middleware in routes that need to be protected.

const express = require('express');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Protected route
router.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
