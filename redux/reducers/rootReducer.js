import { combineReducers } from "redux";
import counterReducter from "./counterReducter";
import routerReducer from "./routerReducer";
import reportsReducer from "./reportsReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  counter: counterReducter,
  report: reportsReducer,
});

export default rootReducer;
