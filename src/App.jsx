import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <h1>ToDo App</h1>
      <p className="subtitle">Global state managed with Redux Toolkit</p>
      <AddTask />
      <ListTask />
    </div>
  )
}
