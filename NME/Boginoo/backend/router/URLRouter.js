const express = require("express");
const { getUrl, createUrl } = require("../controllers/URLController");
const authentication = require("../middleware/authorization");

const urlRouter = express.Router();

urlRouter.get("/", getUrl).post("/", createUrl);
module.exports = urlRouter;
