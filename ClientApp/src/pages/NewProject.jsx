import React, { useState } from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export function NewProject() {
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    dueDate: undefined,
    completed: false,
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedProject = { ...newProject, [fieldName]: value }

    setNewProject(updatedProject)
  }

  function handleDueDate(event) {
    const newDueDateText = event.target.value
    const updatedProject = { ...newProject, dueDate: newDueDateText }

    setNewProject(updatedProject)
  }
  return (
    <>
      <Menu message="Please provide Project details" color="is-primary" />
      <fieldset className="new-project-form">
        <legend>New Project</legend>
        <div className="form-field">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Project Name"
                name="name"
                value={newProject.name}
                onChange={handleStringFieldChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Project Description"
                name="description"
                value={newProject.description}
                onChange={handleStringFieldChange}
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
                name="dueDate"
                value={newProject.dueDate}
                onChange={handleDueDate}
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
