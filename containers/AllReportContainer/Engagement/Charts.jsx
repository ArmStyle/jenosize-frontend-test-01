import React from "react";
import ApexCharts from "apexcharts";

export default function Charts() {
  React.useEffect(() => {
    var options = {
      chart: {
        type: "line",
      },
      series: [
        {
          name: "like",
          data: [45, 40, 56, 61, 54, 58, 57],
        },
      ],
      xaxis: {
        categories: [10, 11, 12, 13, 14, 15, 16],
      },
      yaxis: { tickAmount: 5, min: 0, max: 100 },
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
        show: true,
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  }, []);
  return (
    <div style={{ padding: 16 }}>
      <div id="chart"></div>
    </div>
  );
}
