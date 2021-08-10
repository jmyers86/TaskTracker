import * as React from 'react'
import useCollapse from 'react-collapsed'

export function Accordion() {
  const [isExpanded, setExpanded] = React.useState(false)
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  })

  return (
    <>
      <div className="card">
        <header
          className="card-header"
          {...getToggleProps({
            style: { cursor: 'pointer' },
            onClick: () => setExpanded((x) => !x),
          })}
        >
          <p className="card-header-title">Build an app</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i
                className={`fas fa-angle-${isExpanded ? 'down' : 'left'}`}
                aria-hidden="true"
              ></i>
            </span>
          </button>
        </header>
        <div {...getCollapseProps()}>
          <div className="card-content">
            <div className="content">
              <p>Wireframe</p>
              <p>ERD</p>
              <br />

              <time dateTime="2016-1-1"></time>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Save
            </a>
            <a href="#" className="card-footer-item">
              Edit
            </a>
            <a href="#" className="card-footer-item">
              Delete
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}
