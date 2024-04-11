/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogGlobalContext } from "../../context";
import Loading from "../../components/Loading";
import Errors from "../../components/Errors";

export default function BlogUpdate() {
  const { id } = useParams();
  const { blogDetail, handleBlogDetail, updateBlog, loading, errors } =
    useContext(BlogGlobalContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  function handleInputChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateBlog(id, formData.title, formData.description);
  }

  useEffect(() => {
    handleBlogDetail(id);
  }, [id]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      title: blogDetail.title,
      description: blogDetail.description,
    }));
  }, [blogDetail]);

  if (loading) {
    return <Loading />;
  }

  if (errors !== null) {
    return <Errors errors={errors} />;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-6 text-center text-3xl text-white drop-shadow-md font-bold">
        Update Blog {blogDetail.title}
      </h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 w-3/5 max-w-lg flex flex-col items-center gap-2"
        onSubmit={handleSubmit}
      >
        <div className="w-5/6">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="w-5/6">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            type="text"
            rows={"8"}
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
