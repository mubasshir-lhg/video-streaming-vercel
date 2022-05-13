import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const options = {
  responsive: true,
  radius: 8,
  hoverRadius: 12,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart",
    },
  },
  scales: {
    x: {
      display: true,
      ticks: {
        color: "#fff",
      },
      grid: {
        display: false,
      },
    },
    y: {
      display: true,
      position: "right",
      ticks: {
        color: "#fff",
      },
      grid: {
        display: true,
        color: "#fff",
      },
    },
  },
};
function LineChart({ chartData }) {
  return <Line data={chartData} options={options} />;
}

export default LineChart;
