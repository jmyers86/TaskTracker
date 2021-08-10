import React from 'react'

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="content-has-text-centered">
          <span className="back-arrow">
            <i className="fas fa-arrow-alt-circle-left"></i>
          </span>
          <p className="footer-text">
            <strong>Bulma</strong> by{' '}
            <a href="https://jgthms.com">Jeremy Thomas</a>.
          </p>
        </div>
      </footer>
    </>
  )
}
