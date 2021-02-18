import { types } from "../types/types";

const initialState = {
  isSidebarOpen: false,
  isCartOpen: false,
  loading: false,
  darkMode: true,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.openSidebar:
      return {
        ...state,
        isSidebarOpen: true,
      };
    case types.closeSidebar:
      return {
        ...state,
        isSidebarOpen: false,
      };
    case types.openCart:
      return {
        ...state,
        isCartOpen: true,
      };
    case types.closeCart:
      return {
        ...state,
        isCartOpen: false,
      };
    case types.isLoading:
      return {
        ...state,
        loading: true,
      };
    case types.isNotLoading:
      return {
        ...state,
        loading: false,
      };
    case types.darkModeOn:
      return {
        ...state,
        darkMode: true,
      };
    case types.darkModeOff:
      return {
        ...state,
        darkMode: false,
      };

    default:
      return state;
  }
};
