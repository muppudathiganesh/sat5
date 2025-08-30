// src/App.jsx
import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Simple Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;
