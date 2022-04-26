import { ActionTypes } from "../constants/action-types";

const initialState = {
  cryptocurrencies: [],
};

export const apiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CRYPTOCURRENCY_LIST:
      return { ...state, cryptocurrencies: payload };
    case ActionTypes.GET_GLOBAL_CRYPTOCURRENCY_DATA:
      return { ...state, global: payload };
    default:
      return state;
  }
};
