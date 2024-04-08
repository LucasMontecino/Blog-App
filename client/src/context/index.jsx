/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const BlogGlobalContext = createContext(null);

export default function BlogStateContext({ children }) {
  const [blogs, setBlogs] = useState([]);

  async function fetchingBlogs(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setBlogs(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingBlogs("http://localhost:3000/api/blog");
  }, []);

  console.log(blogs);

  return (
    <BlogGlobalContext.Provider value={{}}>
      {children}
    </BlogGlobalContext.Provider>
  );
}
