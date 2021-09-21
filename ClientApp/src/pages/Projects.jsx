import React, { useEffect, useState } from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Accordion } from '../components/Accordion'
import { Link, useHistory } from 'react-router-dom'
import { authHeader, getUser, getUserId, isLoggedIn } from '../auth'

export function Projects() {
  const [projects, setProjects] = useState([])

  const history = useHistory()

  useEffect(() => {
    async function loadProjects() {
      const response = await fetch('/api/projects', {
        headers: { 'content-type': 'application/json', ...authHeader() },
      })

      if (response.ok) {
        const json = await response.json()

        setProjects(json)
      }
    }
    loadProjects()
  }, [])

  async function handleDelete(event) {
    event.preventDefault()
    const response = await fetch(`/api/Projects/{id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })
    if (response.status === 200 || response.status === 204) {
      history.push('/projects')
    }
  }

  const user = getUser()
  return (
    <>
      <Menu message={`${user.name}'s Projects`} color="is-primary" />
      <fieldset className="projects-accordion">
        <legend>{user.name}'s Projects</legend>
        {projects.map((project) => (
          <Accordion
            key={project.id}
            title={project.name}
            dueDate={new Date(project.dueDate).toLocaleDateString('en-US')}
            editTo={`/projects/${project.id}`}
            onDelete={
              project.userId === getUserId() ? (
                <button onClick={handleDelete}>Delete</button>
              ) : null
            }
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
            {isLoggedIn() ? (
              <Link
                className="fas fa-plus-circle fa-2x plus-icon"
                to="/new"
              ></Link>
            ) : null}
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
