/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import FruitIconSVG from '../../assets/icons/FruitIcon.svg?react';
import VegetableIconSVG from '../../assets/icons/VegetableIcon.svg?react';
import ToolIconSVG from '../../assets/icons/ToolIcon.svg?react';
import AnimalIconSVG from '../../assets/icons/AnimalIcon.svg?react';
import HouseholdItemIconSVG from '../../assets/icons/HouseholdItemIcon.svg?react';
import VehicleIconSVG from '../../assets/icons/VehicleIcon.svg?react';
import ClothingIconSVG from '../../assets/icons/ClothingIcon.svg?react';

const iconClasses = "w-16 h-16 sm:w-20 sm:h-20 text-white";

export const FruitIcon: React.FC = () => (
  <FruitIconSVG className={iconClasses} />
);

export const VegetableIcon: React.FC = () => (
  <VegetableIconSVG className={iconClasses} />
);

export const ToolIcon: React.FC = () => (
  <ToolIconSVG className={iconClasses} />
);

export const AnimalIcon: React.FC = () => (
  <AnimalIconSVG className={iconClasses} />
);

export const HouseholdItemIcon: React.FC = () => (
  <HouseholdItemIconSVG className={iconClasses} />
);

export const VehicleIcon: React.FC = () => (
  <VehicleIconSVG className={iconClasses} />
);

export const ClothingIcon: React.FC = () => (
  <ClothingIconSVG className={iconClasses} />
);