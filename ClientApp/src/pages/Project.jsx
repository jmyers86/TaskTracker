import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Accordion } from '../components/Accordion'

export function Project() {
  return (
    <>
      <Menu />

      <fieldset className="project-accordion">
        <legend>Build an app</legend>
        <div className="progress-bar">
          <progress className="progress is-primary" value="15" max="100">
            15%
          </progress>
          <span className="caption">Current Project Progress: 15%</span>
        </div>
        <div className="project-main-field">
          <div>
            <Accordion />
            <Accordion />
          </div>

          <div className="project-actions">
            <span className="new-project-button has-text-centered project-button">
              <i className="fas fa-plus-circle fa-2x plus-icon"></i>
              <span className="caption">New Project</span>
            </span>
            <span className="sort-project-button has-text-centered project-button">
              <i className="fas fa-sort-amount-down fa-2x"></i>
              <span className="caption">Sort</span>
            </span>
          </div>
        </div>
      </fieldset>

      <Footer />
    </>
  )
}
