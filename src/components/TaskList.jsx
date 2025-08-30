// src/components/TaskList.jsx
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: 'Learn React', isCompleted: false },
    { id: 2, taskName: 'Build a ToDo App', isCompleted: false },
    { id: 3, taskName: 'Read a book', isCompleted: true },
  ]);

  const markAsDone = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: true } : task
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          taskName={task.taskName}
          isCompleted={task.isCompleted}
          onMarkDone={() => markAsDone(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
