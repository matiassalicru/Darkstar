import React, { useState } from "react";

export const ProductSlider = ({ slideImgs, action }) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX((slideImgs.length - 1) * -100) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (slideImgs.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="card__slider">
      {slideImgs.map((img, index) => {
        return (
          <div
            key={index}
            className="card__slide"
            onClick={action}
            style={{ transform: `translateX(${x}%)` }}
          >
            <img src={img} alt="slide" className="card__slide-img" />
          </div>
        );
      })}

      {slideImgs.length > 1 && (
        <>
          <button onClick={goLeft} id="arrow-left">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={goRight} id="arrow-right">
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
};
