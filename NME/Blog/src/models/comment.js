const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  message: { type: String, required: true, minLenght: 2, maxLength: 500 },
  owner: { type: String, required: true },
  post: { type: String, required: true },
  date: { type: Date, default: new Date() },
});

const Comments = mongoose.model("comments", CommentSchema);
module.exports = Comments;
