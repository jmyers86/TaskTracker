import React, { useState } from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { useHistory } from 'react-router'

export function SignUp() {
  const [errorMessage, setErrorMessage] = useState('')
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const history = useHistory()

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedUser = { ...newUser, [fieldName]: value }
    setNewUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })

    const json = await response.json()

    if (response.status === 400) {
      setErrorMessage(Object.values(json.errors).join(' '))
    } else {
      history.push('/')
    }
  }

  return (
    <>
      <Menu message="Welcome, please Sign-up!" color="is-link" />
      <div className="login-main">
        {errorMessage && (
          <article className="message is-warning">
            <div className="message-body">{errorMessage}</div>
          </article>
        )}
        <form className="box login-box">
          <h1 className="has-text-centered login-text">
            Please provide your details:
          </h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                value={newUser.name}
                onChange={handleStringFieldChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email Address</label>

            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleStringFieldChange}
              />
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
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={handleStringFieldChange}
              />
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
              <button
                className="button is-link signup-register-button"
                onSubmit={handleFormSubmit}
              >
                Register
              </button>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
