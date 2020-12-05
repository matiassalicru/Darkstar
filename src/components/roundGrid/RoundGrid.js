import React, { useState } from "react";
import { RoundCard } from "./RoundCard";
import { rounds } from '../../data/data';

export const RoundGrid = () => {

  const [destacados, setDestacados] = useState(rounds);

  return (
    <div className="roundGrid__main">
      {destacados.map((destacado) => (
        <RoundCard title={destacado.type} bg={destacado.bg}/>
      ))}
    </div>
  );
};
