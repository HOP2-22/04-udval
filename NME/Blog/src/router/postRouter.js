const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  getPostsById,
  deletePost,
} = require("../controllers/postController");
const postRouter = express.Router();

postRouter.get("/post", getPosts);
postRouter.post("/post/create", createPost);
postRouter.put("/post/:id", updatePost);
postRouter.get("/post/:id", getPostsById);
postRouter.delete("/post/:id", deletePost);
module.exports = postRouter;
