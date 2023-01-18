const express = require("express");
const {
  getUrl,
  createUrl,
  getUrlByOne,
  getUrlByEmail,
} = require("../controllers/URLController");
// const authentication = require("../middleware/authorization");

const urlRouter = express.Router();

urlRouter
  .get("/", getUrl)
  .post("/", createUrl)
  .get("/shortened/:id", getUrlByOne)
  .get("/history/:email", getUrlByEmail);
module.exports = urlRouter;
