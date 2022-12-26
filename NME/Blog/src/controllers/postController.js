const Posts = require("../models/post");

exports.getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.send(posts);
};
exports.createPost = async (req, res) => {
  try {
    const data = await Posts.create(
      req.body
      // likes: 0,
      // publishDate: new Date(),
    );
    res.send({ message: "successfully posted" });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Posts.findByIdAndUpdate(id, req.body);
    res.send({ message: "successfully updated" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
exports.getPostsById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id);
    res.send(post);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Posts.findByIdAndDelete(id);
    res.send({ message: "successfully deleted" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
// exports.updateUser = async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   try {
//     await Users.findByIdAndUpdate(id, req.body);
//     res.send({ message: "successfully updated" });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// };
// exports.deleteUser = async (req, res) => {
//   try {
//     await Users.findByIdAndDelete({ _id: req.params.id });
//     res.send({ message: "deleted successfully" });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// };
