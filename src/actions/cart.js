import { types } from "../types/types";

export const addCart = (item) => {
  return {
    type: types.addToCart,
    payload: item,
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: types.removeFromCart,
    payload: itemID,
  };
};

export const cleanCart = () => {
  return {
    type: types.cleanCart,
  };
};
