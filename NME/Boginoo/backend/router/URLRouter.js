const express = require("express");
const {
  getUrl,
  createUrl,
  getUrlByOne,
} = require("../controllers/URLController");
// const authentication = require("../middleware/authorization");

const urlRouter = express.Router();

urlRouter
  .get("/", getUrl)
  .post("/", createUrl)
  .get("/shortened/:id", getUrlByOne);
module.exports = urlRouter;
