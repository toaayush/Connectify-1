import React from 'react'
import { Link } from 'react-router-dom'
import './Slidebar.css'

const Slidebar = (props) => {
  const {handleLogOut} = props
  return (
    <div>
      <div className="slidebar">
      <ul className="slidebar-menu">
            <li className="slidebar-menu-item">
              <a className="item-link"href="/">
                CONNECT
              </a>
            </li>
            <li className="slidebar-menu-item">
              <a className="item-link"href="/">
                Contact Us
              </a>
            </li>
            <li className="slidebar-menu-item">
              <a className="item-link" href="/">
                Settings
              </a>
            </li>
            <li className="slidebar-menu-item">
              <a className="item-link" href="/">
                About Us
              </a>
            </li>
            <li className="slidebar-menu-item">
              <a className="item-link" href="/">
                Notifications
              </a>
            </li>
            <li className="slidebar-menu-item">
              <a className="item-link" href="/">
                Help
              </a>
            </li>
            <li className="slidebar-menu-item">
              <a className="item-link" href="/">
                Themes
              </a>
            </li>
            <li className="slidebar-menu-item">
              <Link className="item-link" to="/landingpage" onClick={handleLogOut}>
                Log Out
              </Link>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Slidebar
