import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        BIENVENIDOS PEDIDOS PERSIA
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">INICIO</NavLink>
        </li>
        <li>
          <NavLink to="/services">REGISTRARSE</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACTENOS</NavLink>
        </li>
      </ul>
    </nav>
  );
};