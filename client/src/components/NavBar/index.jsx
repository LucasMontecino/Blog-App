import { NavLink } from "react-router-dom";

export default function NavBar() {
  function handleReload() {
    window.location.reload();
  }

  return (
    <header>
      <nav className="flex justify-between px-8 h-12 items-center bg-slate-800 text-white shadow-md shadow-slate-800">
        <h1>
          <NavLink
            to={"/"}
            className={"font-bold text-xl"}
            onClick={handleReload}
          >
            Blog Website
          </NavLink>
        </h1>
        <ul className="flex gap-8">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/addBlog"}>Add Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
