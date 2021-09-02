import React, { useEffect, useState } from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Accordion } from '../components/Accordion'
import { Link } from 'react-router-dom'

export function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function loadProjects() {
      const response = await fetch('/api/projects')

      if (response.ok) {
        const json = await response.json()

        setProjects(json)
      }
    }
    loadProjects()
  }, [])
  return (
    <>
      <Menu message="Joe's Projects" color="is-primary" />
      <fieldset className="projects-accordion">
        <legend>Joe's Projects</legend>
        {projects.map((project) => (
          <Accordion
            key={project.id}
            title={project.name}
            dueDate={new Date(project.dueDate).toLocaleDateString('en-US')}
            editTo={`/projects/${project.id}`}
            onDelete={() => window.alert('deleted!')}
          >
            <div className="project-detail-field card-content">
              <div className="content">
                <p className="is-strong">{project.description}</p>
                <ul className="task-list">
                  {project.tasks.map((task) => (
                    <li key={task.id}> {task.name} </li>
                  ))}
                </ul>
              </div>
            </div>
          </Accordion>
        ))}

        <div className="projects-actions">
          <span className="new-project-button has-text-centered projects-button">
            <Link
              className="fas fa-plus-circle fa-2x plus-icon"
              to="/new"
            ></Link>
            <span className="caption">New Project</span>
          </span>
          <span className="sort-project-button has-text-centered projects-button">
            <i className="fas fa-sort-amount-down fa-2x"></i>
            <span className="caption">Sort</span>
          </span>
        </div>
      </fieldset>

      <Footer />
    </>
  )
}
