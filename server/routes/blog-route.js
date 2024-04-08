const express = require("express");
const {
  fetchListOfBLogs,
  addNewBlog,
} = require("../controllers/blog-controller");

const blogRouter = express.Router();

blogRouter.get("/blog", fetchListOfBLogs);
blogRouter.post("/blog", addNewBlog);

module.exports = blogRouter;
