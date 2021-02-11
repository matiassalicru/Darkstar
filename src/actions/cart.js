import { types } from "../types/types";

export const addCart = (item) => {
  return {
    type: types.addToCart,
    payload: item,
  };
};

export const updateItem = (itemID, addOrRemove) => {
  return {
    type: types.updateCart,
    payload: { itemID, addOrRemove },
  };
};

export const cleanCart = () => {
  return {
    type: types.cleanCart,
  };
};

