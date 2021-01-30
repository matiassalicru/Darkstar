import { types } from "../types/types";

export const closeSidebar = () => {
  return {
    type: types.closeSidebar,
  };
};

export const openSidebar = () => {
  return {
    type: types.openSidebar,
  };
};

export const openCart = () => {
  return { 
    type: types.openCart,
  };
}

export const closeCart = () => {
  return {
    type: types.closeCart,
  };
}

export const isLoading = () => {
  return {
    type: types.isLoading,
  };
};

export const isNotLoading = () => {
  return {
    type: types.isNotLoading,
  };
};

export const darkModeOff = () => {
  return {
    type: types.darkModeOff,
  };
};

export const darkModeOn = () => {
  return {
    type: types.darkModeOn,
  };
};
