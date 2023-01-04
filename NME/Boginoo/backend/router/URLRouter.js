const express = require("express");
const { getUrl, createUrl } = require("../controllers/URLController");

const urlRouter = express.Router();

urlRouter.get("/", getUrl).post("/", createUrl);
module.exports = urlRouter;
