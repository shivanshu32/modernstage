'use client';

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import ColorPicker from '@/components/ColorPicker';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
      <ColorPicker />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
