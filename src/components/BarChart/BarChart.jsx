import React from "react";
import { map, get, toArray, countBy } from "lodash";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const BarChart = () => {
  const users = useSelector((state) => state);

  const sex = [];

  map(users, (man) => sex.push(get(man, ["gender"], "")));

  const uniqSexValues = new Set(sex);
  const labels = toArray(uniqSexValues);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
      },
    },
  };
  const data = {
    labels: " ",
    datasets: [
      {
        label: "Male",
        data: labels.map(() => countBy(sex).Male),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Female",
        data: labels.map(() => countBy(sex).Female),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="bar-chart chart" data-testid="barChart">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
