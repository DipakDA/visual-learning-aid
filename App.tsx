import React, { useState, useCallback } from 'react';
import type { Category } from '@/types';
import { CATEGORIES } from '@/constants';
import { CategorySelection } from '@/components/CategorySelection';
import { LearningView } from '@/components/LearningView';
import Footer from './components/Footer';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleSelectCategory = useCallback((category: Category) => {
    setSelectedCategory(category);
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedCategory(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <main className="flex-1 container mx-auto p-4 md:p-8">
        {!selectedCategory ? (
          <CategorySelection
            categories={CATEGORIES}
            onSelectCategory={handleSelectCategory}
          />
        ) : (
          <LearningView category={selectedCategory} onGoHome={handleGoHome} />
        )}
      </main>
      <Footer />
    </div>
  );
};