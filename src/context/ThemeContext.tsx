'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  setColors: React.Dispatch<React.SetStateAction<ThemeColors>>;
  isColorPickerOpen: boolean;
  toggleColorPicker: () => void;
}

const defaultColors: ThemeColors = {
  primary: '#e6b300', // Default primary color from tailwind config
  secondary: '#006ce6', // Default secondary color from tailwind config
  background: '#14142b', // Default background color (luxury-800)
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load saved colors from localStorage, or use defaults
  const [colors, setColors] = useState<ThemeColors>(() => {
    if (typeof window !== 'undefined') {
      const savedColors = localStorage.getItem('themeColors');
      return savedColors ? JSON.parse(savedColors) : defaultColors;
    }
    return defaultColors;
  });

  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const toggleColorPicker = () => {
    setIsColorPickerOpen(prev => !prev);
  };

  // Save colors to localStorage when they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeColors', JSON.stringify(colors));
      
      // Apply CSS variables to :root
      const root = document.documentElement;
      root.style.setProperty('--color-primary', colors.primary);
      root.style.setProperty('--color-secondary', colors.secondary);
      root.style.setProperty('--color-background', colors.background);
    }
  }, [colors]);

  return (
    <ThemeContext.Provider value={{ colors, setColors, isColorPickerOpen, toggleColorPicker }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
