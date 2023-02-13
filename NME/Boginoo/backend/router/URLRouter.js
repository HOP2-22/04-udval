const express = require("express");
const {
  getUrl,
  createUrl,
  getUrlByOne,
  getUrlByEmail,
  Navigate,
  getDataCount,
} = require("../controllers/URLController");
const authentication = require("../middleware/authorization");

const urlRouter = express.Router();

urlRouter
  .get("/", getUrl)
  .post("/", createUrl)
  .get("/shortened/:id", getUrlByOne)
  .get("/history/:page/:limit", getUrlByEmail)
  .get("/historycount", getDataCount)
  .get("/:short", Navigate);
module.exports = urlRouter;
