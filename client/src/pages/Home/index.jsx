/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BlogGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import Loading from "../../components/Loading";
import Errors from "../../components/Errors";

export default function Home({ theme }) {
  const { blogs, loading, errors, deleteBlog } = useContext(BlogGlobalContext);

  if (loading) {
    return <Loading theme={theme} />;
  }

  if (errors !== null) {
    return <Errors errors={errors} />;
  }

  return (
    <main className="flex flex-wrap max-w-5xl mx-auto gap-4 justify-center min-h-full my-8">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => {
          return (
            <BlogCard
              blog={blog}
              key={blog._id}
              deleteBlog={deleteBlog}
              theme={theme}
            />
          );
        })
      ) : (
        <p>
          No blogs yet. Go to{" "}
          <NavLink
            to={"/addBlog"}
            className={"text-white underline font-semibold hover:text-cyan-500"}
          >
            Add Blog Page
          </NavLink>{" "}
          to add a new blog.
        </p>
      )}
    </main>
  );
}
