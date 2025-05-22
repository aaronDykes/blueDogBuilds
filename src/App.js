import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import Gallery from "./pages/Gallery";
import Inquire from "./pages/Inquire";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/gallery" element={< Gallery />} />
        <Route path="/inquire" element={<Inquire />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
