const express = require("express");
const {
  fetchListOfBLogs,
  addNewBlog,
  deleteBlog,
} = require("../controllers/blog-controller");

const blogRouter = express.Router();

blogRouter.get("/blog", fetchListOfBLogs);
blogRouter.post("/blog", addNewBlog);
blogRouter.delete("/blog/:id", deleteBlog);

module.exports = blogRouter;
