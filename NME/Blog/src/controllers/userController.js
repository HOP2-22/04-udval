const Users = require("../models/user");

exports.getUsers = async (req, res) => {
  const users = await Users.find();
  res.send(users);
};
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    res.send(user);
  } catch (err) {
    req.status(500).send({ message: err.message });
  }
};
exports.createUser = async (req, res) => {
  try {
    const data = await Users.create({
      firstName: req.body.firstName,
      age: req.body.age,
    });
    res.send({ message: "created successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await Users.findByIdAndUpdate(id, req.body);
    res.send({ message: "successfully updated" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete({ _id: req.params.id });
    res.send({ message: "deleted successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
