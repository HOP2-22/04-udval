const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.getUser = async (req, res) => {
  console.log(req.body);
  try {
    const list = await User.find({
      email: req.body.email,
    });
    console.log(list);
    if (list.length == 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).send(list[0]);
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
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        process.env.ACCESS_TOKEN_KEY
      );
      res.send({ email: user.email, match: match, token: token });
    } else {
      res.status(400).send({ message: "failed" });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
