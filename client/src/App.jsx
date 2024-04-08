import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBlog" element={<AddBlog />} />
      </Routes>
    </>
  );
}

export default App;
