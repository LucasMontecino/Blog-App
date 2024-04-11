import { useContext } from "react";
import { BlogGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import Loading from "../../components/Loading";

export default function Home() {
  const { blogs, loading, errors, deleteBlog } = useContext(BlogGlobalContext);

  if (loading) {
    return <Loading />;
  }

  if (errors !== null) {
    return (
      <p className="text-red-600 font-bold text-2xl h-48 flex items-center justify-center uppercase">
        {errors}
      </p>
    );
  }

  return (
    <main className="flex flex-wrap max-w-5xl mx-auto gap-4 justify-center min-h-full my-8">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => {
          return (
            <BlogCard blog={blog} key={blog._id} deleteBlog={deleteBlog} />
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
