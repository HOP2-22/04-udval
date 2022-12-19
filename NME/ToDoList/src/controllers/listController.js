let list = [
  { title: "delguur yvah", todo: ["tums", "luuvan", "medku"], checked: false },
  {
    title: "skincare",
    todo: ["cleanse", "hydrate", "moisturize"],
    checked: false,
  },
];
exports.getList = (req, res) => {
  res.status(200).json({
    status: list,
  });
};
exports.createList = (req, res) => {
  list.push({ ...req.body, checked: false });
  console.log(list);
  res.status(200).json({ message: "added" });
};
exports.deleteList = (req, res) => {
  const { id } = req.body;
  const listItems = list.filter((index) => index !== id);
  console.log(listItems);
  res.status(200).json(`ToDo was successfully deleted`);
};
exports.checkList = (req, res) => {
  const { id } = req.body;
  list[id].checked = !list[id].checked;
  res.send({ message: "checked" });
};
