import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import NavBar from "./components/NavBar";
import BlogUpdate from "./pages/BlogUpdate";

function App() {
  return (
    <div className="container bg-slate-300 min-h-screen min-w-full pb-6">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/:id" element={<BlogUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
