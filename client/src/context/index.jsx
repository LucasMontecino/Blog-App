/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const BlogGlobalContext = createContext(null);

export default function BlogStateContext({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const [blogDetail, setBlogDetail] = useState({});

  const urlRender = "https://blog-app-9384.onrender.com/";

  // const localhost = "http://localhost:3001/";

  async function fetchingBlogs(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setTimeout(() => {
          setLoading(false);
          setErrors(null);
          setBlogs(data.blogList);
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
  }

  async function deleteBlog(currentId) {
    try {
      setLoading(true);
      const response = await fetch(`${urlRender}api/blog`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: currentId }),
      });

      if (!response.ok) {
        setErrors(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        setLoading(false);
        setErrors(null);
        console.log("Deleted blog: ", data);
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
  }

  async function updateBlog(id, title, description) {
    try {
      setLoading(true);
      const response = await fetch(`${urlRender}api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        setErrors(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        setLoading(false);
        setErrors(null);
        alert(`Blog updated succesfully!`);
        window.location.assign("/");
      }
    } catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
  }

  async function addBlog(title, description) {
    try {
      setLoading(true);
      const response = await fetch(`${urlRender}api/blog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        setErrors(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        setLoading(false);
        setErrors(null);
        alert(`New Blog was created succesfully with id: ${data.newBlog._id}`);
        window.location.assign("/");
      }
    } catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
  }

  function handleBlogDetail(currentDetailId) {
    let cpyBlogs = [...blogs];

    let result = cpyBlogs.find((blog) => blog._id === currentDetailId);

    setBlogDetail(result);
  }

  useEffect(() => {
    fetchingBlogs(`${urlRender}api/blog`);
  }, []);

  return (
    <BlogGlobalContext.Provider
      value={{
        blogs,
        loading,
        errors,
        deleteBlog,
        handleBlogDetail,
        blogDetail,
        updateBlog,
        addBlog,
      }}
    >
      {children}
    </BlogGlobalContext.Provider>
  );
}
