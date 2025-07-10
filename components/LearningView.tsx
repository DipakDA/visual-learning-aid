import React, { useState, useEffect, useMemo } from 'react';
import type { Category, ItemData } from '@/types';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { HomeIcon, NextIcon, MicrophoneIcon, ShuffleIcon } from '@/components/icons/ActionIcons';

// Helper to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

interface LearningViewProps {
  category: Category;
  onGoHome: () => void;
}

const ErrorDisplay: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => (
    <div className="flex flex-col items-center justify-center text-center bg-red-50 dark:bg-red-900/20 p-8 rounded-lg">
        <p className="text-2xl font-semibold text-red-600 dark:text-red-400">Oops! Something went wrong.</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{message}</p>
        <button onClick={onRetry} className="mt-6 px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-colors">
            Go Home
        </button>
    </div>
);

export const LearningView: React.FC<LearningViewProps> = ({ category, onGoHome }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(true);

  const { speak } = useTextToSpeech();

  const items = useMemo(() => {
    const itemList = category.items;

    console.log("Category items:", itemList);
    return isShuffled ? shuffleArray(itemList) : itemList;
  }, [category.items, isShuffled]);
  
  // Reset index when items change (e.g., when shuffle is toggled)
  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  // console.log("Current items:", items);

  const currentItem: ItemData | undefined = items[currentIndex];

  useEffect(() => {
    if (currentItem) {
      speak(currentItem.name);
    }
  }, [currentItem, speak]);

  console.log(currentItem);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleRepeat = () => {
    if (currentItem) {
      speak(currentItem.name);
    }
  };
  
  const toggleShuffle = () => {
    setIsShuffled(prev => !prev);
  };
  
  if (!currentItem) {
     return <div className="flex items-center justify-center h-[80vh]"><ErrorDisplay message={"No items found for this category."} onRetry={onGoHome} /></div>;
  }


  return (
    <div className="flex flex-col items-center justify-between h-[calc(100vh-4rem)] max-w-4xl mx-auto">
      <div className="w-full flex justify-between items-center mb-4">
        <button onClick={onGoHome} className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Go to category selection">
            <HomeIcon className="w-8 h-8 text-gray-700 dark:text-gray-200"/>
        </button>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{category.name}</h2>
        <button onClick={toggleShuffle} className={`p-3 rounded-full transition-colors ${isShuffled ? 'bg-primary-light text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`} aria-label={isShuffled ? "Disable shuffle" : "Enable shuffle"}>
            <ShuffleIcon className="w-8 h-8"/>
        </button>
      </div>

      <div className="w-full flex-grow flex items-center justify-center my-4">
        <div className="aspect-square w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
            <img 
                src={currentItem.image} 
                alt={currentItem.name} 
                className="w-full h-full object-cover"
            />
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-5xl md:text-6xl font-bold tracking-wider text-gray-900 dark:text-white">{currentItem.name}</p>
        {currentItem.hindi_name && (
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-1">{currentItem.hindi_name}</p>
        )}
        {currentItem.gujarati_name && (
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-1">{currentItem.gujarati_name}</p>
        )}
      </div>

      <div className="w-full flex items-center justify-center gap-6 md:gap-10">
        <button
            onClick={handleRepeat}
            aria-label="Repeat audio"
            className="flex items-center justify-center w-24 h-24 rounded-full bg-secondary hover:bg-secondary-dark text-white shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary-light"
        >
            <MicrophoneIcon className="w-12 h-12" />
        </button>
        <button
            onClick={handleNext}
            aria-label="Next item"
            className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary hover:bg-primary-dark text-white shadow-xl transform transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-light"
        >
            <NextIcon className="w-20 h-20 md:w-24 md:h-24" />
        </button>
      </div>
    </div>
  );
};