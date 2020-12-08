import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../../actions/data";

export const RoundCard = ({ title, bg }) => {
  const dispatch = useDispatch();

  const bringData = () => {
    dispatch(fetchData(title.toLowerCase()));
  };

  return (
    <Link
      to={`/tienda/${title.toLowerCase()}`}
      onClick={bringData}
    >
      <div className={`roundGrid__card `}>
        <div className={`roundGrid__img ${bg}`}></div>
        <p>{title}</p>
      </div>
    </Link>
  );
};
