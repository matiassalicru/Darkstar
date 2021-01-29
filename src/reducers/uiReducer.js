import { types } from "../types/types";

const initialState = {
  isOpen: false,
  loading: true,
  darkMode: true,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.openSidebar:
      return {
        ...state,
        isOpen: true,
      };
    case types.closeSidebar:
      return {
        ...state,
        isOpen: false,
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
      }

    default:
      return state;
  }
};
