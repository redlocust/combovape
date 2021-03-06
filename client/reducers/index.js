import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import mixes from "./mixes";
import activePage from "./activePage";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  mixes: mixes,
  activePage: activePage,
});