import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // ... Autres fonctions et logique ici

  return (
    <div className="App">
      <h1>Mes tâches</h1>
      <TaskForm addTask/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
