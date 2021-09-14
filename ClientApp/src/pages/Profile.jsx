import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Accordion } from '../components/Accordion'
import { isLoggedIn, getUser } from '../auth'

const user = getUser()

export function Profile() {
  return (
    <>
      <Menu message="Joe's Profile" color="is-dark" />
      <div className="profile-page">
        {isLoggedIn() && user.photoURL ? (
          <figure className="image is-128x128 profile-picture">
            <img
              className="is-rounded "
              src={user.photoURL}
              alt={`${user.name}'s Profile'`}
            />
          </figure>
        ) : null}

        <fieldset className="profile-accordion">
          <div>
            <Accordion title="Notifications">
              <div className="notification-detail-field">
                <ul className="notification-list">
                  <li>Wireframe completed (7/20/2021)</li>
                  <li>ERD completed (7/21/2021)</li>
                  <li>Static HTML past due (8/12/2021)</li>
                </ul>
              </div>
            </Accordion>
            <Accordion title="Messages">
              <div className="message-detail-field">
                <ul className="message-list">
                  <li>You golden, baby.</li>
                </ul>
              </div>
            </Accordion>
          </div>
        </fieldset>
      </div>
      <Footer />
    </>
  )
}
