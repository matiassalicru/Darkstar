import React from "react";
import swal from "sweetalert";

export const RoundCard = ({ title, bg }) => {
  const show = (title) => {
    swal(`acá debería salir la sección de ${title}`, "", "warning");
  };

  return (
    <div className={`roundGrid__card `} onClick={() => show(title)}>
      <div className={`roundGrid__img ${bg}`}></div>
      <p>{title}</p>
    </div>
  );
};
