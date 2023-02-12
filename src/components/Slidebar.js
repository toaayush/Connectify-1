import React from 'react'
import './Slidebar.css'

const Slidebar = () => {
  return (
    <div>
      <div className="slidebar">
      <ul className="slidebar-menu">
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
                Log Out
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
          </ul>
      </div>
    </div>
  )
}

export default Slidebar
