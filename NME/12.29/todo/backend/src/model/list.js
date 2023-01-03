const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: { type: String },
  detail: { type: Array },
  isDone: { type: Boolean, default: false },
});

const List = mongoose.model("todos", ListSchema);

module.exports = List;
