const Task = require("../models/task");
exports.getList = async (req, res) => {
  const data = await Task.find();
  res.send(data);
};
exports.addData = async (req, res) => {
  const data = await Task.create({
    title: req.body.title,
    detail: req.body.detail,
    isDone: false,
  });
  res.send({ message: "successfully added" });
};
exports.updateData = async (req, res) => {
  const { id, isDone } = req.body;
  await Task.findByIdAndUpdate({ _id: id }, { isDone: isDone });
  res.send({ message: "successfully updated" });
};
exports.removeData = async (req, res) => {
  await Task.findByIdAndDelete({ _id: req.body.id });
  res.send({ message: "successfully removed" });
};
