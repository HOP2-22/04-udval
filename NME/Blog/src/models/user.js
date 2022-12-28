const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true, maxLength: [50, "max length 50"] },
  lastName: { type: String, required: true, maxLength: [50, "max length 50"] },
  email: { type: String, required: true, isEmail },
  phone: { type: Number },
  age: { type: Number },
  registerDate: { type: Date, default: new Date() },
});
const Users = mongoose.model("users", UserSchema);

module.exports = Users;
