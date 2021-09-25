import React from "react";
import "./Analytics.scss";

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
          <div className="analytics-cards-rightCol"></div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
