const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  text: { type: String },
  likes: { type: Number, default: 0 },
  link: { type: String },
  tags: { type: Array },
  publishDate: { type: Date, default: new Date() },
  owner: { type: String },
});
const Posts = mongoose.model("posts", PostsSchema);

module.exports = Posts;
