import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../../actions/data";
import useWindowDimensions from "../../hooks/useWindowDimensions/useWindowDimensions";

export const GridCard = ({ title, bg }) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const bringData = () => {
    dispatch(fetchData(title.toLowerCase()));
  };

  return (
    <Link
      to={`/tienda/${title.toLowerCase()}`}
      onClick={bringData}
    >
      <div className={`${width < 700 ? 'gridSections__cardMobile' : 'gridSections__cardDesktop'} `}>
        <div className={`gridSections__img ${bg}`}></div>
        <p>{title}</p>
      </div>
    </Link>
  );
};
