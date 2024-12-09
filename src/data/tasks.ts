interface Task {
  text: string;
  category: 'fitness' | 'mindfulness' | 'productivity' | 'health' | 'social';
  duration: number;
}

export const tasks: Task[] = [
  { text: "Go to the gym", category: "fitness", duration: 45 },
  { text: "Read a book", category: "mindfulness", duration: 30 },
  { text: "Go for a run", category: "fitness", duration: 30 },
  { text: "Practice meditation", category: "mindfulness", duration: 15 },
  { text: "Write in your journal", category: "mindfulness", duration: 15 },
  { text: "Learn something new", category: "productivity", duration: 60 },
  { text: "Do yoga", category: "fitness", duration: 20 },
  { text: "Call a friend or family member", category: "social", duration: 20 },
  { text: "Clean and organize your space", category: "productivity", duration: 30 },
  { text: "Cook a healthy meal", category: "health", duration: 45 },
  { text: "Take a nature walk", category: "health", duration: 30 },
  { text: "Practice a hobby", category: "mindfulness", duration: 30 },
  { text: "Do push-ups and stretching", category: "fitness", duration: 15 },
  { text: "Drink 8 glasses of water", category: "health", duration: 5 },
  { text: "Plan your next week", category: "productivity", duration: 20 },
  { text: "Listen to an educational podcast", category: "productivity", duration: 30 },
  { text: "Do a random act of kindness", category: "social", duration: 15 },
  { text: "Take a power nap", category: "health", duration: 20 },
  { text: "Practice gratitude", category: "mindfulness", duration: 10 },
  { text: "Stretch and mobility work", category: "fitness", duration: 15 }
];

export type { Task };