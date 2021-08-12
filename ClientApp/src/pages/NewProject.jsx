import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export function NewProject() {
  return (
    <>
      <Menu />
      <fieldset className="new-project-form">
        <legend>New Project</legend>
        <div className="form-field">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Project Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Project Description"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Estimated Due Date</label>
            <div className="control">
              <input
                className="input"
                type="date"
                placeholder="Estimated Project Due Date"
              />
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered form-buttons">
            <p className="control">
              <a className="button is-primary">Save</a>
            </p>
            <p className="control">
              <a className="button is-light">Discard</a>
            </p>
          </div>
        </div>
      </fieldset>

      <Footer />
    </>
  )
}
