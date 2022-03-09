import React from "react";
import MenuDate from "./MenuDate";
import Title from "../Title";
import DailyContainer from "./DailyContainer";
import WeeklyContainer from "./WeeklyContainer";
import MonthlyContainer from "./MonthlyContainer";
import { useDispatch, useSelector } from "react-redux";
import * as TYPES from "../../../redux/actions";

import DatePicker from "../../../components/DatePicker";

const Engagement = () => {
  const state = useSelector((state) => state.report);
  const dispatch = useDispatch();

  const setDateType = (value) => {
    dispatch({ type: TYPES.HANDLE_DATE_TYPE, payload: value });
  };
  const setReportDate = (value) => {
    dispatch({ type: TYPES.HANDLE_REPORT_DATE, payload: value });
  };
  const setReportDisplay = (value) => {
    dispatch({ type: TYPES.HANDLE_REPORT_DISPLAY, payload: value });
  };
  const setReportType = (value) => {
    dispatch({ type: TYPES.HANDLE_REPORT_TYPE, payload: value });
  };

  return (
    <>
      <MenuDate
        value={state.dateType}
        setValue={setDateType}
        display={state.reportDisplay}
        setDisplay={setReportDisplay}
      />
      <DatePicker
        type={state.dateType}
        date={state.reportDate}
        setDate={setReportDate}
      />
      <Title type={state.dateType} date={state.reportDate} />
      {state.dateType == 0 && <DailyContainer />}
      {state.dateType == 1 && (
        <WeeklyContainer
          report={state.reportType}
          setReport={setReportType}
          display={state.reportDisplay}
        />
      )}
      {state.dateType == 2 && (
        <MonthlyContainer
          report={state.reportType}
          setReport={setReportType}
          display={state.reportDisplay}
        />
      )}
    </>
  );
};

export default Engagement;
