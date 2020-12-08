import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav__main">
      <Link to="/">
        <h1 className="nav__title">DARKSTAR</h1>
      </Link>
    </nav>
  );
};
