const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String },
  detail: { type: Array },
  isDone: { type: Boolean },
});
const Task = mongoose.model("todos", TaskSchema);

module.exports = Task;
