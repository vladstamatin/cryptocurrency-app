import { ActionTypes } from "../constants/action-types";

const initialState = {
  cryptocurrencies: [],
};

export const apiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_API:
      return { ...state, cryptocurrencies: payload };
    default:
      return state;
  }
};
