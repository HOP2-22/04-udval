const URL = require("../models/URLModel");
exports.getUrl = async (req, res) => {
  const list = await URL.find();
  console.log("liest", list);
  res.send(list);
};
exports.createUrl = async (req, res) => {
  console.log(req.body);
  await URL.create({
    originalURL: req.body.originalURL,
    shortenedURL: req.body.shortenedURL,
    email: req.body.user,
  });
  res.send({ message: "Create" });
};
