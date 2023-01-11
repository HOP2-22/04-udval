const express = require("express");
const { getUrl, createUrl } = require("../controllers/URLController");
const authentication = require("../middleware/authorization");

const urlRouter = express.Router();

urlRouter.get("/", authentication, getUrl).post("/", authentication, createUrl);
module.exports = urlRouter;
