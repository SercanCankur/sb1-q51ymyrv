import React from 'react';
import { Task } from '../data/tasks';
import { getCategoryColor, getCategoryIcon } from '../utils/taskUtils';

interface TaskDisplayProps {
  task: Task | null;
}

export function TaskDisplay({ task }: TaskDisplayProps) {
  if (!task) return null;

  const categoryColor = getCategoryColor(task.category);
  const categoryIcon = getCategoryIcon(task.category);

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500 animate-fade-in">
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${categoryColor} mb-4`}>
        {categoryIcon} {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Ceren, you should:</h2>
      <p className="text-xl text-gray-700 mb-4">{task.text}</p>
      <p className="text-sm text-gray-500">⏱️ Duration: {task.duration} minutes</p>
    </div>
  );
}