import { types } from "../types/types";

export const addCart = (item) => {
  return {
    type: types.addToCart,
    payload: item,
  };
};

export const removeCart = (itemID) => {
  return {
    type: types.removeFromCart,
    payload: itemID,
  };
};
