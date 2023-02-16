import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPageNavbar.css'

const LandingPageNavbar = () => {
  return (
    <div className="fixed">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand" >
            Connectify
          </div>
          <ul className="landing-page-navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loginpage">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signuppage">
                Sign Up
              </Link>
            </li>
          </ul>
          <div className="mode-container">
          <button className="mode">Mode</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default LandingPageNavbar