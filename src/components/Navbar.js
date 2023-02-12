import React, { useState } from "react";
import "./Navbar.css";
import Slidebar from "./Slidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const changeSlidebar = () => {
    if (!openmenu) {
      setOpenmenu(true);
    } else {
      setOpenmenu(false);
    }
    // console.log(openmenu);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Connectify
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/friends">
                Friends
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/messages">
                Messages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myprofile">
                My Profile
              </Link>
            </li>
          </ul>
          <div className="hamburger" onClick={changeSlidebar}>
            <div className="ham-line"></div>
            <div className="ham-line"></div>
            <div className="ham-line"></div>
          </div>
        </div>
      </nav>
      {openmenu ? <Slidebar /> : ""}
    </div>
  );
};

export default Navbar;
