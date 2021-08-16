import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export function SignUp() {
  return (
    <>
      <Menu message="Welcome, please Sign-up!" />
      <div className="login-main">
        <form className="box login-box">
          <h1 className="has-text-centered login-text">
            Please provide your details:
          </h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email Address</label>

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
            <label className="label">Password</label>

            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Re-enter Password</label>

            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control login-buttons has-text-centered">
              <button className="button is-primary signup-register-button">
                Register
              </button>
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
