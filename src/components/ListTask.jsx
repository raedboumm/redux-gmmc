import { useSelector, useDispatch } from 'react-redux'
import {
  selectVisibleTasks,
  selectFilter,
  setFilter,
} from '../features/tasks/tasksSlice'
import Task from './Task'

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'done', label: 'Done' },
  { value: 'notDone', label: 'Not done' },
]

export default function ListTask() {
  const tasks = useSelector(selectVisibleTasks)
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <section className="list-task">
      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={filter === f.value ? 'active' : ''}
            onClick={() => dispatch(setFilter(f.value))}
          >
            {f.label}
          </button>
        ))}
      </div>

      {tasks.length === 0 ? (
        <p className="empty">No tasks to show.</p>
      ) : (
        <ul className="tasks">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  )
}
