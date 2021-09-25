import React from "react";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { FiBell, FiMessageSquare } from "react-icons/fi";
import { BiFullscreen } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { BiSearchAlt } from "react-icons/bi";
import "./Header.scss";

const Header = ({ setIsidebarCollapsed, isSidebarCollapsed }) => {
  return (
    <div className="header">
      <div className="header-leftContent">
        {isSidebarCollapsed ? (
          <RiMenuUnfoldFill
            className="header-leftContent-toggleBtn icon"
            onClick={() => setIsidebarCollapsed(!isSidebarCollapsed)}
          />
        ) : (
          <RiMenuFoldFill
            className="header-leftContent-toggleBtn icon"
            onClick={() => setIsidebarCollapsed(!isSidebarCollapsed)}
          />
        )}

        <div className="header-leftContent-searchInput">
          <BiSearchAlt className="icon" /> |
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-leftContent-dropDownMenu"></div>
      </div>
      <div className="header-rightContent">
        <FiBell className="header-rightContent-icon icon" />
        <FiMessageSquare className="header-rightContent-icon icon" />
        <BiFullscreen className="header-rightContent-icon icon" />
        <FcBusinessman className="header-rightContent-icon icon" />
      </div>
    </div>
  );
};

export default Header;
