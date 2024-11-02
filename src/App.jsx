import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
