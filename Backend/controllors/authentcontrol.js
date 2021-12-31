const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("express-jwt");

// Register
exports.CreateRegister = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name });
    if (user) {
      return res.tatus(400).json({ errors: [{ msg: "user aready Exit" }]});
    }
    user = new User({
      name,
      password,
    });
    // bcryptjs hash()
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.send("Register sucssagefly");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Data base error");
  }
};
//   Login
exports.Login = async (req, res) => {
  res.send("NEW Login");
};
