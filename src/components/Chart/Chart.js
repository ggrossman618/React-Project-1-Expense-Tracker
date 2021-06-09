import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //taking objects and creating an array with just their valuess
  const totalMaximum = Math.max(...dataPointValues); //spread method to pull out all values in array and make them standalone numbers

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
