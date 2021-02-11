import { types } from "../types/types";

export const sumPrices = (price) => {
  return {
    type: types.sumTotal,
    payload: price,
  };
};

export const minusPrices = (price) => {
  return {
    type: types.minusTotal,
    payload: price,
  };
};
