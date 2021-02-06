import React from "react";
import { RoundCard } from "./RoundCard";
import { rounds } from '../../data/data';

export const RoundGrid = () => {

  return (
    <div className="roundGrid__main">
      {rounds.map((destacado,index) => (
        <RoundCard key={index} title={destacado.type} bg={destacado.bg}/>
      ))}
    </div>
  );
};

