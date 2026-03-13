import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ setCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <h2>BAHUCHAR INDUSTRIES</h2>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`menu ${open ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>

        <li className="dropdown">
          Products ▸
          <ul className="submenu">
            <li><Link to="/category-1">Cast Iron Pulley</Link></li>
<li><Link to="/category-2">Nylon Pulley</Link></li>
</ul>
  </li>

        <li><Link to="/downloads">Downloads</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>

        <li className="nav-contact">
          <a href="tel:+919054008855">
            📞 Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;