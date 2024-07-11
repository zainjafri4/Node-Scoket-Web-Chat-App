const User = require("../models/usersModels");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const generateToken = require("../utils/generateToken/index.js");

module.exports.userCreate = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(422).json({
        success: false,
        message: "Email Already Exists",
      });
    }

    if (!name || !email || !password) {
      return res.status(422).json({
        success: false,
        message: "Name, Email & Password are required",
      });
    }

    if (!validator.isEmail(email))
      return res.status(422).json({
        success: false,
        message: "Please Enter a Correct Email",
      });

    if (!validator.isStrongPassword(password)) {
      return res.status(422).json({
        success: false,
        message: "Password is Weak",
      });
    }

    const newUser = new User({ name, email, password });

    await newUser.save();

    const token = await generateToken(newUser._id);

    return res.status(200).json({
      success: false,
      data: { _id: newUser._id, name, email, token },
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(422).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isValidPass = await bcrypt.compare(password, user?.password);

    if (!isValidPass) {
      return res.status(422).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = await generateToken(user._id);

    return res.status(200).json({
      success: false,
      data: { _id: user._id, name: user.name, email, token },
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

module.exports.getOneUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};
