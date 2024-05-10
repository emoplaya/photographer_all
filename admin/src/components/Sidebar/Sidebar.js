import React from "react";
import addIcon from "../../assets/icons/add_icon_white.png";
import plus from "../../assets/icons/plus.svg";
import list from "../../assets/icons/list.svg";
import orders from "../../assets/icons/orders.svg";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={plus} width="40px" alt="" />
          <p>Добавить</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={list} width="40px" alt="" />
          <p>Список</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={orders} width="40px" alt="" />
          <p>Заказы</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
