import React from 'react';
import type { Category } from '@/types';
import { FruitIcon, VegetableIcon, ToolIcon, AnimalIcon, HouseholdItemIcon, VehicleIcon, ClothingIcon } from '@/components/icons/CategoryIcons';

const translations: Record<string, any> = {
  fruits: [
    { name: "Apple", hindi_name: "सेब", gujarati_name: "સફરજન" },
    { name: "Banana", hindi_name: "केला", gujarati_name: "કેળું" },
    { name: "Orange", hindi_name: "संतरा", gujarati_name: "નારંગી" },
    { name: "Strawberry", hindi_name: "स्ट्रॉबेरी", gujarati_name: "સ્ટ્રોબેરી" },
    { name: "Grapes", hindi_name: "अंगूर", gujarati_name: "દ્રાક્ષ" },
    { name: "Watermelon", hindi_name: "तरबूज", gujarati_name: "તરબૂચ" },
    { name: "Pineapple", hindi_name: "अनानास", gujarati_name: "અનાનસ" },
    { name: "Mango", hindi_name: "आम", gujarati_name: "કેરી" },
    { name: "Peach", hindi_name: "आड़ू", gujarati_name: "આલૂભુખારા" },
    { name: "Pear", hindi_name: "नाशपाती", gujarati_name: "નાશપાતી" },
    { name: "Cherry", hindi_name: "चेरी", gujarati_name: "ચેરી" },
    { name: "Kiwi", hindi_name: "कीवी", gujarati_name: "કીવી" },
    { name: "Lemon", hindi_name: "नींबू", gujarati_name: "લીંબુ" },
    { name: "Blueberry", hindi_name: "ब्लूबेरी", gujarati_name: "બ્લૂબેરી" },
    { name: "Raspberry", hindi_name: "रसभरी", gujarati_name: "રસભરી" },
    { name: "Plum", hindi_name: "आलूचा", gujarati_name: "બોર" },
    { name: "Coconut", hindi_name: "नारियल", gujarati_name: "નાળિયેર" },
    { name: "Avocado", hindi_name: "एवोकाडो", gujarati_name: "એવોકાડો" }
  ],
  vegetables: [
    { name: "Carrot", hindi_name: "गाजर", gujarati_name: "ગાજર" },
    { name: "Broccoli", hindi_name: "ब्रोकोली", gujarati_name: "બ્રોકોલી" },
    { name: "Tomato", hindi_name: "टमाटर", gujarati_name: "ટમેટું" },
    { name: "Potato", hindi_name: "आलू", gujarati_name: "બટાકા" },
    { name: "Lettuce", hindi_name: "सलाद", gujarati_name: "લેટ્યુસ" },
    { name: "Cucumber", hindi_name: "खीरा", gujarati_name: "કાકડી" },
    { name: "Onion", hindi_name: "प्याज", gujarati_name: "ડુંગળી" },
    { name: "Garlic", hindi_name: "लहसुन", gujarati_name: "લસણ" },
    { name: "Capsicum", hindi_name: "शिमला मिर्च", gujarati_name: "શિમલા મરચું" },
    { name: "Spinach", hindi_name: "पालक", gujarati_name: "પાલક" },
    { name: "Corn", hindi_name: "मक्का", gujarati_name: "મકાઈ" },
    { name: "Mushroom", hindi_name: "मशरूम", gujarati_name: "મશરૂમ" },
    { name: "Eggplant", hindi_name: "बैंगन", gujarati_name: "રિંગણ" },
    { name: "Zucchini", hindi_name: "तोरी", gujarati_name: "તુરાઈ" },
    { name: "Cauliflower", hindi_name: "फूलगोभी", gujarati_name: "ફૂલાવર" },
    { name: "Peas", hindi_name: "मटर", gujarati_name: "વાલ" },
    { name: "Asparagus", hindi_name: "शतावरी", gujarati_name: "શતાવરી" },
    { name: "Celery", hindi_name: "अजवाइन", gujarati_name: "અજમો" }
  ]
};

const createItem = (category: string, name: string) => {
  const list = Array.isArray(translations[category]) ? translations[category] : [];
  const translation = list.find(item => item.name === name) || { name, hindi_name: "", gujarati_name: "" };
  return {
    name,
    hindi_name: translation.hindi_name,
    gujarati_name: translation.gujarati_name,
    image: `./assets/images/${category}/${name.toLowerCase().replace(/ /g, '-')}.jpg`
  };
};

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