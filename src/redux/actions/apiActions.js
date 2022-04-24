import { ActionTypes } from "../constants/action-types";
import { getRequest } from "../../utils/api.js";

export const getCryptocurrencies = () => {
  return async (dispatch, getState) => {
    try {
      const response = await getRequest({
        url: "https://api.coincap.io/v2/assets",
      });
      dispatch({ type: ActionTypes.FETCH_API, payload: response });
    } catch (e) {
      console.error(e);
    }
  };
};
