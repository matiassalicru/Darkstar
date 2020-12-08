import { types } from "../types/types";

export const dataReducer = (state = [], action) => {
  switch (action.type) {
    case types.setData:
      return action.payload;

    default:
      return state;
  }
};
