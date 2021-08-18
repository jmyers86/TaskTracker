import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered footer-content">
          <span className="back-arrow">
            <Link to="..">
              <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
            </Link>
          </span>
          <p className="footer-text">
            <strong>Task Tracker</strong> by{' '}
            <a href="https://joeywoey.com">Joe M</a>.
          </p>
        </div>
      </footer>
    </>
  )
}
