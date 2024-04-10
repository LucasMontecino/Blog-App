/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const BlogGlobalContext = createContext(null);

export default function BlogStateContext({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

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
      setErrors(error.message);
      setLoading(false);
    }
  }

  async function deleteBlog(currentId) {
    try {
      const response = await fetch("http://localhost:3000/api/blog", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: currentId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Deleted blog: ", data);

      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchingBlogs("http://localhost:3000/api/blog");
  }, []);

  return (
    <BlogGlobalContext.Provider value={{ blogs, loading, errors, deleteBlog }}>
      {children}
    </BlogGlobalContext.Provider>
  );
}
