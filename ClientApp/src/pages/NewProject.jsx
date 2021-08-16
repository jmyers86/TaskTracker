import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export function NewProject() {
  return (
    <>
      <Menu message="Please provide Project details" />
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
          <div className="field is-grouped is-grouped-centered has-addons form-buttons">
            <button className="button is-light is-small">Discard</button>

            <button className="button is-primary is-small">Save</button>
          </div>
        </div>
      </fieldset>

      <Footer />
    </>
  )
}
