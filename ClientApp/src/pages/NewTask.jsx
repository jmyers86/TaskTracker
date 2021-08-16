import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export function NewTask() {
  return (
    <>
      <Menu message="Please provide Task details" />
      <fieldset className="new-task-form">
        <legend>New Task</legend>
        <div className="form-field">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Task Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Task Description"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Estimated Time</label>
            <div className="control">
              <input
                className="input"
                type="time"
                placeholder="Task Estimated Time"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Start Date</label>
            <div className="control">
              <input
                className="input"
                type="date"
                placeholder="Task Start Date"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Due Date</label>
            <div className="control">
              <input
                className="input"
                type="date"
                placeholder="Task Due Date"
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
