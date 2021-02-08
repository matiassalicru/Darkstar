import React from "react";

import header1 from "../../Assets/carousel/Banner-1.png";
import header2 from "../../Assets/carousel/Banner-2.png";
import header3 from "../../Assets/carousel/Banner-3.png";
import { HomeSwiper } from "../common/HomeSwiper";

export const Header = () => {
  const slideImgs = [header1, header2, header3];

  return (
    <div className="header__slider">
      <HomeSwiper data={slideImgs} />
    </div>
  );
};
