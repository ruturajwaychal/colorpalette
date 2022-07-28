import React from "react";
import Colorpalette from "../Colorpalette/Colorpalette";
import ToggleBtn from "../Togglebtn/ToggleBtn";
import { Link } from "react-router-dom";

import "./Appbar.css";

const Appbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}
      >
        <h3 className="head-title">TextUtils</h3>
        <div className="container">
          <div className="menu-bar">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li>
                <Link className="nav-link home-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link home-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex ml-auto colorpalette">
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => props.toggleMode("primary")}
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              />
              <div
                className="bg-danger rounded mx-2"
                onClick={() => props.toggleMode("danger")}
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              />
              <div
                className="bg-success rounded mx-2"
                onClick={() => props.toggleMode("success")}
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              />
              <div
                className="bg-warning rounded mx-2"
                onClick={() => props.toggleMode("warning")}
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              />
            </div>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => props.toggleMode(null)}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Appbar;
