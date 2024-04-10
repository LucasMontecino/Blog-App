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
        setLoading(false);
        setErrors(null);
        setBlogs(data.blogList);
      }
    } catch (error) {
      setLoading(false);
      setErrors(error);
    }
  }

  useEffect(() => {
    fetchingBlogs("http://localhost:3000/api/blog");
  }, []);

  console.log(blogs);

  return (
    <BlogGlobalContext.Provider value={{ blogs, loading, errors }}>
      {children}
    </BlogGlobalContext.Provider>
  );
}
