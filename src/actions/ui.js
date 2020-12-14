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

export const isLoading = () => {
  return {
    type: types.isLoading
  }
}

export const isNotLoading = () => {
  return {
    type: types.isNotLoading
  }
}