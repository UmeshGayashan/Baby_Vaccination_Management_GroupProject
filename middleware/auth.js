const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to verify JWT token for parent login
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send('Access token is required');
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, parent) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    req.parent = parent;
    next();
  });
};

// Middleware to verify JWT token for healthcare professional login
const authenticateHealthcareToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send('Access token is required');
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, healthcarePro) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    req.healthcarePro = healthcarePro;
    next();
  });
};


// Middleware to verify JWT token for admin login
const authenticateAdminToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send('Access token is required');
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, decodedToken) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    // Check if the decoded token indicates an admin user
    if (!decodedToken.isAdmin) {
      return res.status(403).send('Admin access required');
    }
    req.admin = decodedToken;
    next();
  });
};

module.exports = { authenticateToken, authenticateHealthcareToken, authenticateAdminToken };
