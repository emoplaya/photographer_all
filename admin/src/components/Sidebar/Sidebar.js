import React from "react";
import addIcon from "../../assets/icons/add_icon_white.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={addIcon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={addIcon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={addIcon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
