import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Accordion } from '../components/Accordion'

export function Projects() {
  return (
    <>
      <Menu />
      <fieldset className="projects-accordion">
        <legend>Joe's Projects</legend>
        <div>
          <Accordion />
          <Accordion />
        </div>

        <div className="project-actions">
          <span className="new-project-button has-text-centered project-button">
            <i className="fas fa-plus-circle fa-3x plus-icon"></i>
            <span className="caption">New Project</span>
          </span>
          <span className="sort-project-button has-text-centered project-button">
            <i className="fas fa-sort-amount-down fa-2x"></i>
            <span className="caption">Sort</span>
          </span>
        </div>
      </fieldset>

      <Footer />
    </>
  )
}
