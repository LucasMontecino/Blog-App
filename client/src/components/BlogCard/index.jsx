import { AiOutlineDelete } from "react-icons/ai";
/* eslint-disable react/prop-types */
export default function BlogCard({ blog, deleteBlog }) {
  return (
    <article
      key={blog._id}
      className="rounded-md border bg-white shadow-md flex flex-col justify-between px-4 py-4 w-72 h-56"
    >
      <p className="border border-amber-300 bg-amber-100 shadow-md rounded-md px-3 py-1">
        {blog.description}
      </p>
      <div className="flex items-center justify-between">
        <h2 className="text-left font-bold text-teal-700">{blog.title}</h2>
        <AiOutlineDelete
          className="text-teal-700 text-xl cursor-pointer"
          onClick={() => deleteBlog(blog._id)}
        />
      </div>
    </article>
  );
}
