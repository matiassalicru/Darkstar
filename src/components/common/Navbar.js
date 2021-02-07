import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cleanData } from "../../actions/data";
import  logoDarkstar  from "../../Assets/logos/Darkstar.ar.png";
// import { darkModeOff, darkModeOn } from "../../actions/ui";

export const Navbar = () => {
  const dispatch = useDispatch();
  // const { ui } = useSelector((state) => state);

  // const toggleDarkmode = () => {
  //   if (!ui.darkMode) {
  //     dispatch(darkModeOn());
  //   } else {
  //     dispatch(darkModeOff());
  //   }
  //   console.log(ui.darkMode);
  // };

  return (
    <nav className="nav__main">
      <Link to="/" onClick={() => dispatch(cleanData())}>
        <img className="nav__logo" src={logoDarkstar} alt="Darkstar"/>
        {/* <h1 className="nav__title">DARKSTAR</h1> */}
      </Link>

      {/* <button className="btn" onClick={toggleDarkmode}>DarkMode</button> */}
    </nav>
  );
};
