import React from 'react'
import './custom.scss'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'
import { NewProject } from './pages/NewProject'
import { LogIn } from './pages/LogIn'
import { NewTask } from './pages/NewTask'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'
import { EditUser } from './pages/EditUser'
import { Route, Switch } from 'react-router-dom'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/projects/:id">
        <Project />
      </Route>
      <Route exact path="/new">
        <NewProject />
      </Route>
      <Route exact path="/projects/:id/newTask">
        <NewTask />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/editProfile/:id">
        <EditUser />
      </Route>
    </Switch>
  )
}
