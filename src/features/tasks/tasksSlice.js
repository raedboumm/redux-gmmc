import { createSlice, nanoid } from '@reduxjs/toolkit'

/**
 * A task has the following attributes:
 *   - id:          unique identifier
 *   - description: text of the task
 *   - isDone:      boolean, true when the task is completed
 *
 * The filter value can be: 'all' | 'done' | 'notDone'
 */
const initialState = {
  items: [
    { id: nanoid(), description: 'Learn Redux Toolkit', isDone: true },
    { id: nanoid(), description: 'Build the ToDo checkpoint', isDone: false },
  ],
  filter: 'all',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Add a new task. Usage: dispatch(addTask('my description'))
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare(description) {
        return {
          payload: {
            id: nanoid(),
            description: description.trim(),
            isDone: false,
          },
        }
      },
    },

    // Toggle the isDone flag of a task
    toggleTask(state, action) {
      const task = state.items.find((t) => t.id === action.payload)
      if (task) task.isDone = !task.isDone
    },

    // Edit the description of an existing task
    editTask(state, action) {
      const { id, description } = action.payload
      const task = state.items.find((t) => t.id === id)
      if (task) task.description = description.trim()
    },

    // Remove a task
    deleteTask(state, action) {
      state.items = state.items.filter((t) => t.id !== action.payload)
    },

    // Change the current filter
    setFilter(state, action) {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTask, editTask, deleteTask, setFilter } =
  tasksSlice.actions

/* ---------- selectors ---------- */

export const selectFilter = (state) => state.tasks.filter

export const selectVisibleTasks = (state) => {
  const { items, filter } = state.tasks
  switch (filter) {
    case 'done':
      return items.filter((t) => t.isDone)
    case 'notDone':
      return items.filter((t) => !t.isDone)
    default:
      return items
  }
}

export default tasksSlice.reducer
