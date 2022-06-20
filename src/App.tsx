import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
