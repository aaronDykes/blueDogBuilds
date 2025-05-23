import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Inquire from "./pages/Inquire";
import Bathroom from "./pages/Bathroom";
import Builds from "./pages/Builds";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/inquire" element={<Inquire />} />
        <Route path="/bathrooms" element={<Bathroom />} />
        <Route path="/builds" element={<Builds />} />
      </Routes>
    </div>
  );
}
