const express = require("express");
const {
  getComments,
  getCommentsByPost,
  getCommentsByUser,
  createComment,
  deleteComment,
} = require("../controllers/commentController");

const commentRouter = express.Router();

commentRouter
  .get("/comment", getComments)
  .get("/post/:id/comment", getCommentsByPost)
  .get("/user/:id/comment", getCommentsByUser)
  .post("/comment/create", createComment)
  .delete("comment/:id", deleteComment);

module.exports = commentRouter;
