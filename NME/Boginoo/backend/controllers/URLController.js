const URL = require("../models/URLModel");
const jwt = require("jsonwebtoken");

exports.getUrl = async (req, res) => {
  const list = await URL.find();
  res.status(200).json({ ...list });
};
exports.createUrl = async (req, res) => {
  console.log(req.body);
  await URL.create({
    originalURL: req.body.originalURL,
    shortenedURL: req.body.shortenedURL,
    user: req.body.user,
  });
  res.status(200).json({ message: "Create" });
};
exports.getUrlByOne = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    const data = await URL.findOne({
      shortenedURL: id,
    });
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.statusCode).json({ message: error });
  }
};
exports.getUrlByEmail = async (req, res) => {
  const token = req.headers.token || "";
  if (token == "") {
    return res.status(404).json({ message: "Invalid token" });
  }
  const email = await jwt.decode(token, process.env.ACCESS_TOKEN_KEY)?.email;
  if (!email) {
    return res.status(404).json({ message: "Invalid token" });
  }
  const page = Number(req.params.page);
  const limit = Number(req.params.limit);

  console.log(email);
  try {
    const data = await URL.find({
      user: email,
    })
      .limit(limit)
      .skip(limit * (page - 1))
      .exec();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
exports.getDataCount = async (req, res) => {
  console.log("wtf");
  const token = req.headers.token || "";
  if (token == "") {
    return res.status(404).json({ message: "Invalid token" });
  }
  const email = await jwt.decode(token, process.env.ACCESS_TOKEN_KEY)?.email;
  if (!email) {
    return res.status(404).json({ message: "Invalid token" });
  }
  try {
    const countData = await URL.countDocuments({ user: email });
    res.status(200).json(countData);
  } catch (error) {
    res.status(404).json({ message: "error getting data" });
  }
};
exports.Navigate = async (req, res) => {
  const { short } = req.params;
  try {
    const data = await URL.findOne({
      shortenedURL: short,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
