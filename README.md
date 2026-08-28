# redux-gmmc

A simple **ToDo application** built with **React** and **Redux Toolkit** for global
state management.

## Features

- **Add** a new task
- **Filter** tasks by status: All / Done / Not done
- **Edit** a task's description inline
- Toggle a task as done / not done, and delete it

## Task model

Every task has the following attributes:

| Attribute     | Type    | Description                      |
| ------------- | ------- | ------------------------------- |
| `id`          | string  | Unique identifier (`nanoid`)    |
| `description` | string  | The task text                   |
| `isDone`      | boolean | `true` when the task is done    |

## Components

- **AddTask** – form to create a new task
- **ListTask** – filter bar + the list of visible tasks
- **Task** – a single task row (toggle / edit / delete)

## Redux

- `src/app/store.js` – the Redux store
- `src/features/tasks/tasksSlice.js` – slice with the reducers
  (`addTask`, `toggleTask`, `editTask`, `deleteTask`, `setFilter`) and selectors

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (default http://localhost:5173).
