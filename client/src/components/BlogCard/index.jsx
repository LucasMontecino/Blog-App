import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
export default function BlogCard({ blog, deleteBlog, theme }) {
  return (
    <article
      key={blog._id}
      className={`${
        theme === "dark" ? "bg-gray-700" : "bg-white"
      } rounded-md shadow-md flex flex-col justify-between px-4 py-4 w-72 h-56`}
    >
      <p className="border border-amber-300 bg-amber-100 shadow-md rounded-md px-3 py-2 min-h-24 max-h-32 line-clamp-4">
        {blog.description}
      </p>
      <div className="flex items-center justify-between">
        <h2 className="text-left font-bold text-teal-700 max-w-48 truncate">
          {blog.title}
        </h2>
        <div className="flex gap-2">
          <NavLink to={`/${blog._id}`}>
            <AiOutlineEdit className="text-teal-700 text-xl cursor-pointer" />
          </NavLink>
          <AiOutlineDelete
            className="text-teal-700 text-xl cursor-pointer"
            onClick={() => deleteBlog(blog._id)}
          />
        </div>
      </div>
    </article>
  );
}
