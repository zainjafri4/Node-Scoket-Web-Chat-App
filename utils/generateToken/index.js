const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  const jwtKey = process.env.JWT;
  return jwt.sign({ _id }, jwtKey, { expiresIn: "5d" });
};

module.exports = generateToken;
