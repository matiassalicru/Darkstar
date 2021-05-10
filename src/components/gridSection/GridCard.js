import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../../actions/data";

export const GridCard = ({ title, bg }) => {
  const dispatch = useDispatch();

  const bringData = () => {
    console.log(title);
    dispatch(fetchData(title.toLowerCase()));
  };

  return (
    <Link
      to={`/tienda/${title.toLowerCase()}`}
      onClick={bringData}
    >
      <div className={`gridSections__card `}>
        <div className={`gridSections__img ${bg}`}></div>
        <p>{title}</p>
      </div>
    </Link>
  );
};
