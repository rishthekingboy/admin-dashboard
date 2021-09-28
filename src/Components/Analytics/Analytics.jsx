import React from "react";
import { Line } from "react-chartjs-2";
import "./Analytics.scss";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Analytics = () => {
  return (
    <div className={"analytics"}>
      <div className="analytics-header">
        <div className="analytics-header-label">
          <b>Analytics</b> Dashboard
        </div>
        <div className="analytics-header-btns">
          <div className="analytics-header-btns">Invite a Friend</div>
          <div className="analytics-header-btns">New Project</div>
        </div>
      </div>
      <div className="analytics-cards">
        <div className="analytics-cards-row">
          <div className="analytics-cards-leftCol"></div>
          <div className="analytics-cards-rightCol">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
