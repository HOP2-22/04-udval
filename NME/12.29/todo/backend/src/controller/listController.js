const List = require("../model/list");

exports.getList = async (req, res) => {
  const list = await List.find();
  res.send(list);
};

exports.createList = async (req, res) => {
  const list = await List.create({
    title: req.body.title,
    detail: req.body.detail,
  });
  res.send({ message: "List created" });
};
exports.deleteList = async (req, res) => {
  const id = req.params;
  try {
    await List.findByIdAndDelete(id);
    res.send({ message: "List deleted" });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
