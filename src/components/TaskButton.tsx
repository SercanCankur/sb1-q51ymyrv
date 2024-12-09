import React from 'react';
import { Sparkles } from 'lucide-react';

interface TaskButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export function TaskButton({ onClick, isLoading }: TaskButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg
        shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200
        flex items-center gap-2 text-lg font-semibold ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      <Sparkles className={`w-6 h-6 ${isLoading ? 'animate-spin' : ''}`} />
      {isLoading ? 'Finding activity...' : 'What should I do?'}
    </button>
  );
}