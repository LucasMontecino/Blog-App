import { useContext } from "react";
import { BlogGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

export default function Home() {
  const { blogs, loading, errors, deleteBlog } = useContext(BlogGlobalContext);

  console.log(blogs, loading, errors);

  if (loading) {
    return (
      <p className="text-green-500 font-bold text-2xl h-48 flex items-center justify-center">
        Loading blogs, please wait..
      </p>
    );
  }

  if (errors !== null) {
    return (
      <p className="text-red-600 font-bold text-2xl h-48 flex items-center justify-center uppercase">
        {errors}
      </p>
    );
  }

  return (
    <main className="container flex flex-wrap max-w-5xl mx-auto gap-4 justify-center h-96 my-8">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => {
          return (
            <article
              key={blog._id}
              className="rounded-md border bg-white shadow-md flex flex-col justify-between px-4 py-4 w-72 h-52"
            >
              <p className="border border-amber-300 bg-amber-100 shadow-md rounded-md px-3 py-1">
                {blog.description}
              </p>
              <div className="flex items-center justify-between">
                <h2 className="text-left font-bold text-teal-700">
                  {blog.title}
                </h2>
                <AiOutlineDelete
                  className="text-teal-700 text-xl cursor-pointer"
                  onClick={() => deleteBlog(blog._id)}
                />
              </div>
            </article>
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
