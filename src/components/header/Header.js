import React from "react";

import header1 from "../../Assets/carousel/header1.jpg";
import header2 from "../../Assets/carousel/header2.jpg";
import header3 from "../../Assets/carousel/header3.jpg";

export const Header = () => {
  return (
    <div className="header__main">
      <ul className="header__list">
        <li className="header__list-item">
          <img
            src={header1}
            alt="todavia nada"
            className="header__img-carousel"
          />
        </li>
        <li className="header__list-item">
          <img
            src={header2}
            alt="todavia nada"
            className="header__img-carousel"
          />
        </li>
        <li className="header__list-item">
          <img
            src={header3}
            alt="todavia nada"
            className="header__img-carousel"
          />
        </li>
      </ul>
    </div>
  );
};
