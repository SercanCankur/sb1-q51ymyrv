import React, { useState } from 'react';
import { TaskButton } from './components/TaskButton';
import { TaskDisplay } from './components/TaskDisplay';
import { getRandomTask } from './utils/taskUtils';
import type { Task } from './data/tasks';

function App() {
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateNewTask = () => {
    setIsLoading(true);
    // Simulate a small delay for better UX
    setTimeout(() => {
      setCurrentTask(getRandomTask());
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">What Should Ceren Do?</h1>
        <p className="text-gray-600 text-lg">Click the button to discover your next amazing activity!</p>
      </div>
      
      <TaskButton onClick={generateNewTask} isLoading={isLoading} />
      <TaskDisplay task={currentTask} />
    </div>
  );
}

export default App;