import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Menu(props) {
  const [isActive, setisActive] = useState(false)
  return (
    <>
      <nav
        className={`navbar is-fixed-top ${props.color}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <h1 className="is-title navbar-item">{props.message}</h1>
          <button
            onClick={() => {
              console.log('Click', isActive)
              setisActive(!isActive)
            }}
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div className="navbar-start ">
            <figure className="image is-64x64 profile-picture">
              <img
                className="is-rounded "
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="profile"
              />
            </figure>
            <hr className="navbar-divider" />
            <div className="navbar-items">
              <a className="navbar-item is-large ">
                <Link to="/Projects">Projects</Link>
              </a>
              <a className="navbar-item">
                <Link to="/Profile">Profile</Link>
              </a>
              <a className="navbar-item">About</a>
              <a className="navbar-item is-small">Report an issue</a>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light">Log Out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
