import React from "react";

import header1 from "../../Assets/carousel/Collares.png";
import header2 from "../../Assets/carousel/Aros.png";
import { HomeSwiper } from "../common/HomeSwiper";

export const Header = () => {
  const slideImgs = [header1, header2];

  return (
    <div className="header__slider">
      <HomeSwiper data={slideImgs} />
    </div>
  );
};
