import type React from 'react';

export type CategoryName = 'Fruits' | 'Vegetables' | 'Tools' | 'Animals' | 'Household Items' | 'Vehicles' | 'Clothing';

export interface ItemData {
  name: string;
  image: string; // Path to the local image file
  hindi_name: string;
  gujarati_name: string;
}

export interface Category {
  name: CategoryName;
  icon: React.ReactNode;
  items: ItemData[];
}
