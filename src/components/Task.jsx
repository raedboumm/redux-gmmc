import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, editTask, deleteTask } from '../features/tasks/tasksSlice'

export default function Task({ task }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(task.description)

  const saveEdit = () => {
    const trimmed = draft.trim()
    if (!trimmed) return
    dispatch(editTask({ id: task.id, description: trimmed }))
    setIsEditing(false)
  }

  const cancelEdit = () => {
    setDraft(task.description)
    setIsEditing(false)
  }

  return (
    <li className={`task ${task.isDone ? 'task--done' : ''}`}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />

      {isEditing ? (
        <input
          className="task__edit"
          type="text"
          value={draft}
          autoFocus
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveEdit()
            if (e.key === 'Escape') cancelEdit()
          }}
        />
      ) : (
        <span className="task__label">{task.description}</span>
      )}

      <span className="task__actions">
        {isEditing ? (
          <>
            <button onClick={saveEdit}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      </span>
    </li>
  )
}
