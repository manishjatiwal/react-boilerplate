import Resume from 'applications/resume'
import TestApplication from 'applications/test'

const routes = [
  {
    path: '/test',
    component: TestApplication,
    title: 'Test App'
  },
  {
    path: '/resume',
    component: Resume,
    title: 'Resume'
  }
]

export default routes
