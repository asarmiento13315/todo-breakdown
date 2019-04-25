import TasksService from 'data-access/tasks-service'

/**
 * Perform async Fetch the List of Tasks
 */
export const fetchTaskListThunk = () => {
  const tasksService = new TasksService()
  return new Promise((resolve, reject) => tasksService
    .getList()
    .then((response) => {
      if (response.ok) {
        resolve(response.data)
      } else {
        reject(response.errors)
      }
    })
  )
}

/**
 * Perform async Upsert of a Task
 */
export const upsertTaskThunk = (task) => {
  const tasksService = new TasksService()
  return new Promise((resolve, reject) => tasksService
    .upsertTask(task)
    .then((response) => {
      if (response.ok) {
        resolve(response.data)
      } else {
        reject(response.errors)
      }
    })
  )
}

/**
 * Perform async Delete a Task
 */
export const deleteTaskThunk = (taskId) => {
  const tasksService = new TasksService()
  return new Promise((resolve, reject) => tasksService
    .deleteTask(taskId)
    .then((response) => {
      if (response.ok) {
        resolve(response.data)
      } else {
        reject(response.errors)
      }
    })
  )
}
