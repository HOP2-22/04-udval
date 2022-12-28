const Comments = require("../models/comment");

exports.getComments = async (req, res) => {
  const comments = await Comments.find();
  res.send(comments);
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const { ID } = req.params;
    const list = await Comments.filter((comment) => comment.post === ID);
    res.send(list);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
exports.getCommentsByUser = async (req, res) => {
  try {
    const { ID } = req.params;
    const list = await Comments.filter((comment) => comment.owner === ID);
    res.send(list);
  } catch (error) {
    res.send({ message: error.message });
  }
};
exports.createComment = async (req, res) => {
  try {
    const data = await Comments.create(
      { message: req.body.comment },
      { owner: req.body.owner },
      { post: req.body.post }
    );
    res.send({ message: "Comment created" });
  } catch (error) {
    res.send({ message: error.message });
  }
};
exports.deleteComment = async (req, res) => {
  const id = req.params;
  try {
    await Comments.findByIdAndDelete(id);
    res.send({ message: "Deleted" });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
