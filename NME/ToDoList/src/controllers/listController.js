const Task = require("../models/task");
exports.getList = async (req, res) => {
  const data = await Task.find();
  res.status(200).json(data);
};
exports.addData = async (req, res) => {
  const data = await Task.create({
    title: req.body.title,
    detail: req.body.detail,
    isDone: false,
  });
  res.status(200).json({ message: "successfully added" });
};
exports.updateData = async (req, res) => {
  const { id, isDone } = req.body;
  await Task.findByIdAndUpdate({ _id: id }, { isDone: isDone });
  res.status(200).json({ message: "successfully updated" });
};
exports.removeData = async (req, res) => {
  await Task.findByIdAndDelete({ _id: req.body.id });
  res.status(200).json({ message: "successfully removed" });
};
