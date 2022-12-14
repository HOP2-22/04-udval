let users = [
  { id: 1, name: "uda", lastName: "hhe" },
  { id: 2, name: "hha", lastName: "yuve" },
];
exports.getUsers = (req, res) => {
  res.status(200).json({
    users: users,
  });
};
exports.createUser = (req, res) => {
  users.push({ id: users.length + 1, ...req.body });
  console.log(users);
  res.status(200).json({ message: "created" });
};
