import React, { useState } from "react";
import { RoundCard } from "./RoundCard";

export const RoundGrid = () => {
  const [destacados, setDestacados] = useState([
    "Aros",
    "Collares",
    "Chokers",
    "Belts",
    "Cadenas",
  ]);
  
  return (
    <div className="roundGrid__main">
      {destacados.map((destacado) => (
        <RoundCard title={destacado} />
      ))}
    </div>
  );
};
