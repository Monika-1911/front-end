import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Infrastructure from "./pages/Infrastructure";
import Products from "./pages/Products";
import Downloads from "./pages/Downloads";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/products" element={<Products />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ FIXED ROUTES */}
        <Route path="/category-1" element={<Category1 />} />
        <Route path="/category-2" element={<Category2 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;