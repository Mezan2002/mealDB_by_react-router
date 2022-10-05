import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="navItems">
      <NavLink
        className={({ isActive }) => (isActive ? "activated" : undefined)}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activated" : undefined)}
        to="/meals"
      >
        Meals
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activated" : undefined)}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activated" : undefined)}
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
