import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="nav-menu">
      <div className="nav-container">
        <div className={showNav ? "sideBar " : " showSideBar"}>
          <NavLink exect to="#" className="sideBar-menu">
            Home
          </NavLink>
          <NavLink exect to="#" className="sideBar-menu">
            Services
          </NavLink>
          <NavLink exect to="#" className="sideBar-menu">
            About
          </NavLink>
          <NavLink exect to="#" className="sideBar-menu">
            Contect Us
          </NavLink>
          <i
            class="closeIcon fa fa-times"
            aria-hidden="true"
            onClick={() => setShowNav(!showNav)}
          ></i>
        </div>
        <div className="hamburger-Menu">
          <i
            class="fa fa-bars"
            aria-hidden="true"
            onClick={() => setShowNav(!showNav)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
