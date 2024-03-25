const jwt = require("jsonwebtoken");

const key = "yourSecretKey"; // Replace with your secret key

const generateToken = (userID) => {
  const token = jwt.sign(
    {
      userID: userID,
    },
    key
  );
  return token;
};

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization || "";
  if (!token) {
    return res.status(500).send("Authorization token not provided.");
  }
  jwt.verify(token, key, (err, data) => {
    if (err) {
      return res.status(401).send("Invalid authorization token.");
    } else {
      res.user = {
        userID: data.userID,
      };
      next();
    }
  });
};

module.exports = { generateToken, authMiddleware };
