const express = require("express");
const {
  fetchListOfBLogs,
  addNewBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blog-controller");

const blogRouter = express.Router();

blogRouter.get("/blog", fetchListOfBLogs);
blogRouter.post("/blog", addNewBlog);
blogRouter.delete("/blog", deleteBlog);
blogRouter.put("/blog/:id", updateBlog);

module.exports = blogRouter;
