import { types } from "../types/types";

export const fetchAros = (title) => {
  return (dispatch) => {
    fetch("https://backend-darkstar.herokuapp.com/darkstar")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setData(data[title]));
      });
  };
};

export const setData = (data) => {
  return {
    type: types.setData,
    payload: data,
  };
};