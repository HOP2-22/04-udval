const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: Number },
  age: { type: Number },
  registerDate: { type: Date },
});
const Users = mongoose.model("users", UserSchema);

module.exports = Users;
