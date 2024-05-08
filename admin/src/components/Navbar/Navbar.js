import React from "react";
import logo from "../../assets/icons/logo.svg";
import profile from "../../assets/icons/profile.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <p>Панель администратора</p>
      <img src={profile} width={50} height={50} alt="" />
    </div>
  );
};

export default Navbar;
