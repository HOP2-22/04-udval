const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const URLSchema = new Schema({
  originalURL: { type: String },
  shortenedURL: { type: String },
});

const URL = mongoose.model("shortURL", URLSchema);

module.exports = URL;
