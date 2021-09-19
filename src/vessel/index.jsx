import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApplicationLinks from './application-links'
import routes from './routes'

function Vessel() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <ApplicationLinks />
        </Route>
        {routes.map(({ path, component: Component }) => {
          return (
            <Route path={path} key={path} exact>
              <Component />
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}

export default Vessel
