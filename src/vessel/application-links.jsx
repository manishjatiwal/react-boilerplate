import React from 'react'
import { Link } from 'react-router-dom'
import routes from './routes'

function ApplicationLinks() {
  return (
    <nav>
      <ul>
        {routes.map(route => {
          return (
            <li>
              <Link to={route.path}>{route.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ApplicationLinks
