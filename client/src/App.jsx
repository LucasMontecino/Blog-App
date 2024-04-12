import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import NavBar from "./components/NavBar";
import BlogUpdate from "./pages/BlogUpdate";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-slate-400"
      } min-h-screen min-w-full pb-6`}
    >
      <NavBar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/:id" element={<BlogUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
