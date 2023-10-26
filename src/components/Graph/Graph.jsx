import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
const Graph = ({ val } = props) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: `${val}%`,
        data: [
          { x: 0, y: 100 },
          { x: val, y: val },
          { x: 100, y: 0 },
        ],
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return <Scatter options={options} data={data} />;
};

export default Graph;
