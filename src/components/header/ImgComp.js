import React from "react";

export const ImgComp = ({ src }) => {

    const imgStyles = {
        width: 100+'%',
        height: "auto",
    }

  return <img src={src} alt="slideImg"  style={imgStyles}/>;
};
