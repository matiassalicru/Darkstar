import React, { useState } from "react";

import header1 from "../../Assets/carousel/header1.jpg";
import header2 from "../../Assets/carousel/header2.jpg";
import header3 from "../../Assets/carousel/header3.jpg";
import header4 from "../../Assets/carousel/header4.jpeg";

import { ImgComp } from "./ImgComp";

export const Header = () => {
  const [x, setX] = useState(0);

  const slideImgs = [header4, header1, header2, header3];

  const goLeft = () => {
    x === 0 ? setX((slideImgs.length - 1) * -100) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (slideImgs.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="header__slider">
      {slideImgs.map((img, index) => {
        return (
          <div
            key={index}
            className="header__slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            <ImgComp src={img} key={index} />
          </div>
        );
      })}

      <button onClick={goLeft} id="arrow-left">
        <i className="fas fa-arrow-left"></i>
      </button>
      <button onClick={goRight} id="arrow-right">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};
