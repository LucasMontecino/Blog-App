const mongoose = require("mongoose");
const Blog = require("../model/Blog");

// fetch list of blogs
// add a new blog
// delete a blog
// update a blog

async function fetchListOfBLogs(req, res) {
  let blogList;

  try {
    blogList = await Blog.find();

    if (!blogList) {
      return res.status(400).json("There is no blog yet!");
    }

    return res.status(200).json({ blogList });
  } catch (error) {
    console.log(error);
  }
}

async function addNewBlog(req, res) {
  let { title, description } = req.body;

  const date = new Date();
  const newBlog = Blog({ title, description, date });

  try {
    await newBlog.save();
  } catch (error) {
    console.log(error);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.status(500).json(error);
  }

  return res.status(201).json({ newBlog });
}

async function deleteBlog(req, res) {
  const { id } = req.params;
  let blogToDelete;
  try {
    blogToDelete = await Blog.findById({ _id: id });
    await Blog.deleteOne(blogToDelete);

    return res
      .status(200)
      .json(`The blog with the id ${id} was deleted succesfully`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { fetchListOfBLogs, addNewBlog, deleteBlog };
