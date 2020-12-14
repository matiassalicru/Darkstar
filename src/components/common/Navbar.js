import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cleanData } from "../../actions/data";

export const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <nav className="nav__main">
      <Link to="/" onClick={() => dispatch( cleanData() )}>
        <h1 className="nav__title">DARKSTAR</h1>
      </Link>
    </nav>
  );
};
