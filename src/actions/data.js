import { types } from "../types/types";

export const fetchData = (type) => {
  return (dispatch) => {
    fetch("https://backend-darkstar.herokuapp.com/darkstar")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setData(data[type]));
      });
  };
};

export const setData = (data) => {
  return {
    type: types.setData,
    payload: data,
  };
};

export const cleanData = () => {
  return {
    type: types.cleanData,
    payload: []
  };
};