// Action type
import {
  HANDLE_DATE_TYPE,
  HANDLE_REPORT_DISPLAY,
  HANDLE_REPORT_DATE,
  HANDLE_REPORT_TYPE,
  HANDLE_REPORT_DATA,
} from "./types";

// Action Create
export const handleDateType = (value) => {
  return { type: HANDLE_DATE_TYPE, payload: value };
};
export const handleReportDisplay = (value) => {
  return { type: HANDLE_REPORT_DISPLAY, payload: value };
};
export const handlereportDate = (value) => {
  return { type: HANDLE_REPORT_DATE, payload: value };
};
export const handleReportType = (value) => {
  return { type: HANDLE_REPORT_TYPE, payload: value };
};
export const handleReportData = (value) => {
  return { type: HANDLE_REPORT_DATA, payload: value };
};
