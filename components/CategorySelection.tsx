import React from 'react';
import type { Category } from '@/types';

interface CategorySelectionProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategoryCard: React.FC<{ category: Category; onSelect: () => void; color: string }> = ({ category, onSelect, color }) => (
  <button
    onClick={onSelect}
    className={`group flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-primary-dark transform transition-all duration-300 ease-in-out hover:-translate-y-2 ${color}`}
    aria-label={`Select category: ${category.name}`}
  >
    {category.icon}
    <span className="mt-4 text-xl sm:text-2xl font-bold text-white tracking-wide">
      {category.name}
    </span>
  </button>
);

export const CategorySelection: React.FC<CategorySelectionProps> = ({ categories, onSelectCategory }) => {
  const colors = [
    'bg-red-500 hover:bg-red-600',
    'bg-green-500 hover:bg-green-600',
    'bg-yellow-500 hover:bg-yellow-600',
    'bg-blue-500 hover:bg-blue-600',
    'bg-purple-500 hover:bg-purple-600',
    'bg-pink-500 hover:bg-pink-600',
    'bg-indigo-500 hover:bg-indigo-600',
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
        Choose a Category
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400">
        Select a topic to start learning!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.name}
            category={category}
            onSelect={() => onSelectCategory(category)}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
};