import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from './pages/Services';

export default function App() {
  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer style={{
        marginTop: "40px",
        padding: "20px",
        background: "#222",
        color: "white",
        textAlign: "center"
      }}>
        © 2025 WebDesign. All rights reserved.
      </footer>
    </>
  );
}
