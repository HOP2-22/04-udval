const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.getUser = async (req, res) => {
  try {
    const list = await User.find();
    res.send(list);
  } catch (error) {
    res.send(error.message);
  }
};
exports.createUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);
  try {
    const a = await User.create({
      email: req.body.email,
      password: hashed,
    });
    res.send({ message: "Created" });
  } catch (error) {
    res.send(error);
  }
};
const ACCESS_TOKEN_KEY = "dkfugveiabvf";
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        ACCESS_TOKEN_KEY
      );
      res.send({ user: user, match: match, token: token });
    } else {
      res.send({ message: "failed" });
    }
  } catch (error) {
    res.send({ message: error });
  }
};
