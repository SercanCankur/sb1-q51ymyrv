import { tasks, Task } from '../data/tasks';

export function getRandomTask(): Task {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  return tasks[randomIndex];
}

export function getCategoryColor(category: Task['category']): string {
  const colors = {
    fitness: 'from-blue-500 to-blue-600',
    mindfulness: 'from-purple-500 to-purple-600',
    productivity: 'from-green-500 to-green-600',
    health: 'from-red-500 to-red-600',
    social: 'from-yellow-500 to-yellow-600'
  };
  return colors[category];
}

export function getCategoryIcon(category: Task['category']): string {
  const icons = {
    fitness: '💪',
    mindfulness: '🧘',
    productivity: '⚡',
    health: '❤️',
    social: '👥'
  };
  return icons[category];
}