import React from "react";
import ApexCharts from "apexcharts";
import MenuReports from "../MenuReports";
import List from "../List";
import { useDispatch, useSelector } from "react-redux";
import * as TYPES from "../../../../redux/actions";
import weeklyData from "../../../../mockData/weekly.json";

export default function WeeklyContainer({ report, setReport, display }) {
  const state = useSelector((state) => state.report);
  const [listData, setListData] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // display type
    if (state.reportDisplay == "chart") {
      if (state.reportType == "like") {
        dispatch({
          type: TYPES.HANDLE_REPORT_DATA,
          payload: weeklyData.chartLike,
        });
        setChart(weeklyData.chartLike);
      } else if (state.reportType == "comment") {
        dispatch({
          type: TYPES.HANDLE_REPORT_DATA,
          payload: weeklyData.chartComment,
        });
        setChart(weeklyData.chartComment);
      } else if (state.reportType == "point") {
        dispatch({
          type: TYPES.HANDLE_REPORT_DATA,
          payload: weeklyData.chartPoint,
        });
        setChart(weeklyData.chartPoint);
      } else if (state.reportType == "diamond") {
        dispatch({
          type: TYPES.HANDLE_REPORT_DATA,
          payload: weeklyData.chartDiamond,
        });

        setChart(weeklyData.chartDiamond);
      }
    } else if (state.reportDisplay == "list") {
      if (state.reportType == "like") setList(weeklyData.listLike);
      else if (state.reportType == "comment") setList(weeklyData.listComment);
      else if (state.reportType == "point") setList(weeklyData.listPoint);
      else if (state.reportType == "diamond") setList(weeklyData.listDiamond);
    }
  }, [display, report]);

  const setChart = (value) => {
    let element = document.querySelector("#chart");
    element = null;
    let maxNumber = 1;
    if (value.data) {
      let maxPerSeries = Math.max(...value.data);
      maxNumber = Math.ceil((maxPerSeries + Number.EPSILON) * 1000) / 900;
    }
    var options = {
      chart: {
        type: "line",
      },
      series: [
        {
          name: "like",
          data: value.data,
        },
      ],
      xaxis: {
        categories: value.categories,
      },
      yaxis: { tickAmount: 5, min: 0, max: maxNumber },
      markers: {
        size: [6],
        colors: undefined,
        strokeColors: "#fff",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
      chart: {
        width: "100%",
        type: "line",
        toolbar: {
          show: false,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
          offsetY: -25,
        },
      },
      stroke: {
        // curve: "smooth",
        show: true,
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    if (chart.el != null) {
      chart.render();
      chart.updateOptions(options);
    }
  };

  const setList = (value) => {
    dispatch({
      type: TYPES.HANDLE_REPORT_DATA,
      payload: value,
    });
    setListData(value);
  };

  return (
    <div style={{ padding: 16, paddingTop: 0 }}>
      <MenuReports report={report} setReport={setReport} />
      <div
        style={{
          overflowY: "auto",
          height: "calc(100vh - 380px)",
        }}
      >
        {display == "list" ? (
          <>
            {listData.map((item, i) => {
              return (
                <div key={i}>
                  <List data={item} />
                </div>
              );
            })}
          </>
        ) : (
          <div id="chart"></div>
        )}
      </div>
    </div>
  );
}
