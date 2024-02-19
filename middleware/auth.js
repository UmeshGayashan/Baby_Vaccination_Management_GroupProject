

const jwt = require('jsonwebtoken');

// Middleware to verify JWT token for parent login
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send('Access token is required');
  }

  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
