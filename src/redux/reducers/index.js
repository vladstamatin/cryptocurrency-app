import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";

const reducers = combineReducers({
  allCryptoApis: apiReducer,
});

export default reducers;
