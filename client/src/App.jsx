import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container bg-slate-300 min-h-screen min-w-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBlog" element={<AddBlog />} />
      </Routes>
    </div>
  );
}

export default App;
