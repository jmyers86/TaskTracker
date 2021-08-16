import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Accordion } from '../components/Accordion'

export function Project() {
  return (
    <>
      <Menu message="Joe's Projects" />

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
            <Accordion title="Wireframe">
              <div className="task-detail-field">
                <p>
                  Create a wireframe and decide what is MVP worthy and what is "
                  nice to have".
                </p>
                <ul>
                  <li>Estimated Time: 04:00:00</li>
                  <li>Start Date: 7/17/2021</li>
                  <li>Due Date: 7/20/2021</li>
                  <li>Created On: 7/17/2021</li>
                </ul>

                <div className="buttons has-addons is-centered">
                  <button className="button  is-light is-small">
                    In-Progress
                  </button>
                  <button className="button is-primary is-small">
                    Complete
                  </button>
                </div>
              </div>
            </Accordion>
            <Accordion title="ERD">
              <div className="task-detail-field">
                <p>Create an ERD describing the relationship between models.</p>
                <ul>
                  <li>Estimated Time: 02:00:00</li>
                  <li>Start Date: 7/18/2021</li>
                  <li>Due Date: 7/21/2021</li>
                  <li>Created On: 7/17/2021</li>
                </ul>

                <div className="buttons has-addons is-centered">
                  <button className="button  is-light is-small">
                    In-Progress
                  </button>
                  <button className="button is-primary is-small">
                    Complete
                  </button>
                </div>
              </div>
            </Accordion>
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
