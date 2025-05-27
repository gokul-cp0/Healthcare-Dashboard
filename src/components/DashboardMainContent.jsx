import React from "react";
import DashboardOverview from "../subComponent/DashboardOverview";
import CalendarView from "../subComponent/CalendarView";
import UpcomingSchedule from "../subComponent/UpcomingSchedule";

const DashboardMainContent = () => {
  const mainContent = {
    width: "100%",
    display: "flex",
  };
  const calenderView = {
    width: "50%",
    paddingTop: "90px",
  };

  return (
    <div style={mainContent} className="dash-main-content">
      <DashboardOverview />
      <div style={calenderView} className="calendar-view">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
