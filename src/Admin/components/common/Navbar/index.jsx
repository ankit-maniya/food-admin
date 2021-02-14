import React, { useState } from "react";
import style from "./navbar.css";
import classNames from "classnames/bind";
import {
  IoBagCheckOutline,
  IoChatbubblesOutline,
  IoFastFoodOutline,
  IoGridOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoPieChartOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";
const Navbar = (props) => {
  const cx = classNames.bind(style);
  const [nav, setNav] = useState(false);
  const [actname, setActName] = useState(props.match.path);
  const left_Navbar = cx({
    "l-navbar": true,
    "d-navbar": true,
    expander: nav,
  });

  return (
    <div className="nav__div">
      <div className={left_Navbar} id="navbar" name="navbar">
        <nav className="nav">
          <div>
            <div className="nav__brand">
              {/* <IoGridOutline
                className="nav__toggle"
                id="nav__toggle"
                onClick={() => {
                  setNav(!nav);
                }}
              /> */}
              <Link to="/" className="nav__logo">
                Spiffy
              </Link>
            </div>
            <div className="nav__list">
              <Link
                to="/dashboard"
                className={
                  actname === `/dashboard` ? `nav__link active` : `nav__link`
                }
                onClick={() => {
                  setActName("/dashboard");
                }}
              >
                <IoHomeOutline className="nav__icons" />
                <span className="nav__name">Dashboard</span>
              </Link>

              <Link
                to="/orders"
                className={
                  actname === `/orders` ? `nav__link active` : `nav__link`
                }
                onClick={() => {
                  setActName("/orders");
                }}
              >
                <IoBagCheckOutline className="nav__icons" />
                <span className="nav__name">Orders</span>
              </Link>

              <Link
                to="/menus"
                className={
                  actname === `Menu` ? `nav__link active` : `nav__link`
                }
                onClick={() => {
                  setActName("Menu");
                }}
              >
                <IoFastFoodOutline className="nav__icons" />
                <span className="nav__name">Menu</span>
              </Link>

              <Link
                to="/reports"
                className={
                  actname === `Reports` ? `nav__link active` : `nav__link`
                }
                onClick={() => {
                  setActName("Reports");
                }}
              >
                <IoPieChartOutline className="nav__icons" />
                <span className="nav__name">Reports</span>
              </Link>

              <Link
                to="/messages"
                className={
                  actname === `Messangers` ? `nav__link active` : `nav__link`
                }
                onClick={() => {
                  setActName("Messangers");
                }}
              >
                <IoChatbubblesOutline className="nav__icons" />
                <span className="nav__name">Messangers</span>
              </Link>

              <Link
                to="/settings"
                className={
                  actname === `Settings` ? `nav__link active` : `nav__link`
                }
                onClick={() => {
                  setActName("Settings");
                }}
              >
                <IoSettingsOutline className="nav__icons" />
                <span className="nav__name">Settings</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className="nav__link">
            <IoLogOutOutline className="nav__icons" />
            <span className="nav__name">Logouts</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
