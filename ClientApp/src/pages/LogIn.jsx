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
        <section className="section is-large has-text-centered ">
          <h1 className="title is-small">Please Log In!</h1>
        </section>
      </div>
      <Footer />
    </>
  )
}
