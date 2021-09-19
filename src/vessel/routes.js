import Resume from 'applications/resume'
import TaskManager from 'applications/task-manager'
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
  },
  {
    path: 'task-manager',
    component: TaskManager,
    title: 'Task Manager'
  }
]

export default routes
