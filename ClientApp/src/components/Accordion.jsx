import * as React from 'react'
import useCollapse from 'react-collapsed'

export function Accordion(props) {
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
          <p className="card-header-title">
            {props.title}&nbsp;({props.dueDate})
          </p>

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
          {props.children}
          <footer className="card-footer">
            <a href={props.editTo} className="card-footer-item">
              Edit
            </a>
            <a href="" className="card-footer-item" onClick={props.onDelete}>
              Delete
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}
