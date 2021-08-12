import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export function Login() {
  return (
    <>
      <Menu />
      <div className="login-main">
        <section className="hero has-text-centered">
          <div className="hero-body">
            <p className="title">Task Tracker</p>
          </div>
        </section>
        <h1 className="has-text-centered login-text">Please Log In!</h1>
        <form className="box login-box">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control login-buttons has-text-centered">
              <button className="button is-primary is-light">Register</button>
              <button className="button is-primary">Login</button>
            </p>
          </div>
          <div>
            <a className="password-reset" href="https://google.com">
              Forget your password?
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
