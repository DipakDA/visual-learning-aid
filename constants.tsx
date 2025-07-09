import React from 'react';
import type { Category } from '@/types';
import { FruitIcon, VegetableIcon, ToolIcon, AnimalIcon, HouseholdItemIcon, VehicleIcon, ClothingIcon } from '@/components/icons/CategoryIcons';

const createItem = (category: string, name: string) => ({
  name,
  image: `./assets/images/${category}/${name.toLowerCase().replace(/ /g, '-')}.jpg`
});

export const CATEGORIES: Category[] = [
  {
    name: 'Fruits',
    icon: <FruitIcon />,
    items: [
      'Apple', 'Banana', 'Orange', 'Strawberry', 'Grapes', 'Watermelon', 
      'Pineapple', 'Mango', 'Peach', 'Pear', 'Cherry', 'Kiwi', 'Lemon', 
      'Blueberry', 'Raspberry', 'Plum', 'Coconut', 'Avocado'
    ].map(name => createItem('fruits', name)),
  },
  {
    name: 'Vegetables',
    icon: <VegetableIcon />,
    items: [
      'Carrot', 'Broccoli', 'Tomato', 'Potato', 'Lettuce', 'Cucumber', 
      'Onion', 'Garlic', 'Capsicum', 'Spinach', 'Corn', 'Mushroom', 
      'Eggplant', 'Zucchini', 'Cauliflower', 'Peas', 'Asparagus', 'Celery'
    ].map(name => createItem('vegetables', name)),
  },
  {
    name: 'Tools',
    icon: <ToolIcon />,
    items: [
      'Hammer', 'Screwdriver', 'Wrench', 'Pliers', 'Saw', 'Drill', 
      'Tape Measure', 'Level', 'Mallet', 'Ax', 'Chisel', 'Clamp', 
      'Sander', 'Flashlight', 'Ladder', 'Shovel'
    ].map(name => createItem('tools', name)),
  },
  {
    name: 'Animals',
    icon: <AnimalIcon />,
    items: [
      'Dog', 'Cat', 'Lion', 'Elephant', 'Monkey', 'Giraffe', 'Tiger', 
      'Bear', 'Zebra', 'Horse', 'Cow', 'Pig', 'Sheep', 'Chicken', 
      'Duck', 'Frog', 'Fish', 'Bird', 'Turtle', 'Penguin'
    ].map(name => createItem('animals', name)),
  },
  {
    name: 'Household Items',
    icon: <HouseholdItemIcon />,
    items: [
      'Chair', 'Table', 'Lamp', 'Bed', 'Sofa', 'Clock', 'Television', 
      'Refrigerator', 'Microwave', 'Toaster', 'Spoon', 'Fork', 'Knife', 
      'Plate', 'Cup', 'Bowl', 'Bookshelf', 'Dresser', 'Vase'
    ].map(name => createItem('household-items', name)),
  },
  {
    name: 'Vehicles',
    icon: <VehicleIcon />,
    items: [
      'Car', 'Bus', 'Bicycle', 'Motorcycle', 'Train', 'Airplane', 
      'Boat', 'Helicopter', 'Truck', 'Scooter', 'Ambulance', 
      'Fire truck', 'Police car', 'Tractor', 'Subway', 'Van'
    ].map(name => createItem('vehicles', name)),
  },
  {
    name: 'Clothing',
    icon: <ClothingIcon />,
    items: [
      'Shirt', 'Pants', 'Shoes', 'Hat', 'Jacket', 'Socks', 'Dress', 
      'Skirt', 'Shorts', 'Sweater', 'Gloves', 'Scarf', 'Boots', 
      'Sandals', 'T-shirt', 'Coat', 'Jeans'
    ].map(name => createItem('clothing', name)),
  },
];