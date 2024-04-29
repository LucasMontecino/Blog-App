/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { CiLight } from "react-icons/ci";

export default function NavBar({ theme, setTheme }) {
  function handleReload() {
    window.location.asign("/");
  }

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header>
      <nav className="flex justify-between px-8 h-16 items-center bg-slate-800 text-white shadow-md shadow-slate-800">
        <h1>
          <NavLink
            to={"/"}
            className={"font-bold text-xl"}
            onClick={handleReload}
          >
            Blog Website
          </NavLink>
        </h1>

        <button
          className={`${
            theme === "dark" ? "border-white" : "border-yellow-300"
          } bg-transparent rounded-md border-2 p-1`}
          onClick={handleTheme}
        >
          <CiLight
            className={`${theme === "dark" ? "" : "text-yellow-300"} text-3xl`}
          />
        </button>

        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              className={"font-bold hover:text-cyan-400 hover:underline"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/addBlog"}
              className={"font-bold hover:text-cyan-400 hover:underline"}
            >
              Add Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
