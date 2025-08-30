// src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ taskName, isCompleted, onMarkDone }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded shadow mb-2">
      <span>
        {taskName} - {isCompleted ? '✅ Completed' : '❌ Not Completed'}
      </span>
      {!isCompleted && (
        <button
          onClick={onMarkDone}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Mark as Done
        </button>
      )}
    </div>
  );
};

export default TaskItem;
