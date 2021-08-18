import React from 'react'
import './custom.scss'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'
import { NewProject } from './pages/NewProject'
import { LogIn } from './pages/LogIn'
import { NewTask } from './pages/NewTask'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'
import { Route, Switch } from 'react-router-dom'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route exact path="/Projects">
        <Projects />
      </Route>
      <Route exact path="/Project">
        <Project />
      </Route>
      <Route exact path="/NewProject">
        <NewProject />
      </Route>
      <Route exact path="/NewTask">
        <NewTask />
      </Route>
      <Route exact path="/SignUp">
        <SignUp />
      </Route>
      <Route exact path="/Profile">
        <Profile />
      </Route>
    </Switch>
  )
}
