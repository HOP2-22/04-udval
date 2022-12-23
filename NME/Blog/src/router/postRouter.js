const express = require("express");
const { getPosts } = require("../controllers/postController");
const postRouter = express.Router();

postRouter.get("/posts", getPosts);
postRouter.post("/post/create", createPost);

module.exports = postRouter;
