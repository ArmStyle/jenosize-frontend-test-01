import {
  HANDLE_DATE_TYPE,
  HANDLE_REPORT_DISPLAY,
  HANDLE_REPORT_DATE,
  HANDLE_REPORT_TYPE,
  HANDLE_REPORT_DATA,
} from "../actions";
import moment from "moment";

let INITIAL_STATE = {
  reportData: null,
  dateType: 0,
  reportDisplay: "chart",
  reportDate: moment(new Date()).format("yyyy-MM-DD"),
  reportType: "like",
};

const reportsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_REPORT_DATA:
      return { ...state, reportData: action.payload };
    case HANDLE_DATE_TYPE:
      return { ...state, dateType: action.payload };
    case HANDLE_REPORT_DISPLAY:
      return { ...state, reportDisplay: action.payload };
    case HANDLE_REPORT_DATE:
      return { ...state, reportDate: action.payload };
    case HANDLE_REPORT_TYPE:
      return { ...state, reportType: action.payload };
    default:
      return state;
  }
};

export default reportsReducer;
