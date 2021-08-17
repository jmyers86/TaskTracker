import React, { useState } from 'react'

export function Menu(props) {
  const [isActive, setisActive] = useState(false)
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="is-title navbar-item">{props.message}</h1>
          <button
            onClick={() => {
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
          <div className="navbar-start">
            <figure className="image is-128x128 profile-picture">
              <img
                className="is-rounded "
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="profile"
              />
            </figure>
            <hr className="navbar-divider" />
            <div className="navbar-items">
              <a className="navbar-item is-large">Projects</a>
              <a className="navbar-item">About</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item is-small">Report an issue</a>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light is-centered">Log Out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
