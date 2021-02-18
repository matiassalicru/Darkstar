import { types } from "../types/types";

const initialState = [];

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setData:
      return action.payload;

    case types.cleanData:
      return action.payload;

    default:
      return state;
  }
};
