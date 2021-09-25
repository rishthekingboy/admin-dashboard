import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={isCollapsed ? "sidebar toggle-sidebar" : "sidebar"}>
      <div className="sidebar-header"></div>
    </div>
  );
};

export default Sidebar;
