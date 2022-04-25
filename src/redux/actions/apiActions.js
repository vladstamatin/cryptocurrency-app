import { ActionTypes } from "../constants/action-types";
import { getRequest } from "../../utils/api.js";

export const getCryptocurrencies = () => {
  return async (dispatch, getState) => {
    try {
      const response = await getRequest({
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        // url: "https://api.coincap.io/v2/assets",
        // url: "https://rest.coinapi.io/v1/assets?apikey=9B9E8793-D68F-4C61-AD50-FC3A1CFF0320",
      });
      // console.log(response);
      dispatch({ type: ActionTypes.FETCH_API, payload: response });
    } catch (e) {
      console.error(e);
    }
  };
};
