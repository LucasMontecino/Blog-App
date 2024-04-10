import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <h1>Blog Website</h1>
        <ul>
          <li>
            <NavLink to={"/"} className={"text-xl text-red-400"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/addBlog"}>Add Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
