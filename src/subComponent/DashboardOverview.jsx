import React from "react";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import "../styles/DashboardOverview.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import { HealthStatus } from "../data/healthStatus";
import ActivityFeed from "./ActivityFeed";

const DashboardOverview = () => {
  return (
    <div className="dash-board">
      <div className="board-head">
        <h2>Dashboard</h2>
        <span className="little-text">This Week <FaAngleDown /></span>
      </div>
      <div className="human-details">
        <AnatomySection />
        <div className="human-parts">
          {HealthStatus.map((value, index) => (
            <HealthStatusCards key={index} healthStatus={value} />
          ))}
          <span className="little-text">Details <FaArrowRight /></span>
        </div>
      </div>
      <ActivityFeed />
    </div>
  );
};

export default DashboardOverview;
