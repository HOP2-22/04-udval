const URL = require("../models/URLModel");
exports.getUrl = async (req, res) => {
  const list = await URL.find();
  res.send(list);
};
exports.createUrl = async (req, res) => {
  const list = await URL.create({
    originalURL: req.body.original,
    shortenedURL: req.body.shortened,
  });
  res.send({ message: "Create" });
};
