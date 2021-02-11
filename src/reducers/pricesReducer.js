import { types } from "../types/types";

const initialState = {
  prices: [5, 2],
  total: 10,
};

export const pricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.sumTotal:
      console.log("price:", action.payload);
      state.prices.push(parseInt(action.payload));

      const reducer = (acc, current) => acc + current;

      const precioTotal = state.prices.reduce(reducer);

      return {
        ...state,
        total: precioTotal,
      };

    case types.minusTotal:
      state.total = state.total - action.payload;

      return {
        ...state,
        total: state.total,
      };

    default:
      return state;
  }
};
