const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  try {
    console.log(req);
    // const token = req.header("Authorization").replace("Bearer ", "");
    // const decoded = jwt.verify();
    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = auth;
