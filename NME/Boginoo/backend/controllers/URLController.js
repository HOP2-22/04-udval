const URL = require("../models/URLModel");
exports.getUrl = async (req, res) => {
  const list = await URL.find();
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
exports.getUrlByOne = async (req, res) => {
  const { id } = req.params.id;
  try {
    const data = await URL.findOne({
      shortenedURL: id,
    });
    res.send(data);
  } catch (error) {
    res.status(error.statusCode).send({ message: error });
  }
};
