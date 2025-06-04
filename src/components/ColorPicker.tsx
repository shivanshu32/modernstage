'use client';

import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useTheme } from '@/context/ThemeContext';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

const ColorPicker = () => {
  const { colors, setColors, isColorPickerOpen, toggleColorPicker } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isColorPickerOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isColorPickerOpen]);
  
  const handleColorChange = (color: string, type: 'primary' | 'secondary' | 'background') => {
    setColors(prev => ({
      ...prev,
      [type]: color
    }));
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleColorPicker}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/80 text-white shadow-lg hover:bg-black/90 transition-all hover:scale-110 active:scale-95"
      >
        <IoColorPaletteOutline className="w-6 h-6" />
      </button>

      {/* Color Picker Panel */}
      {isVisible && (
        <div
          className={`fixed bottom-20 right-6 z-50 p-4 rounded-lg bg-theme-background border border-luxury-600 shadow-xl w-72 transition-all duration-300 ${isColorPickerOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-medium">Theme Customizer</h3>
            <button 
              onClick={toggleColorPicker}
              className="text-white hover:text-red-500 transition-colors"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          </div>

          {/* Primary Color */}
          <div className="mb-4">
            <label className="block text-sm text-white/80 mb-2">Primary Color</label>
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-full border border-white/20" 
                style={{ backgroundColor: colors.primary }}
              />
              <HexColorPicker 
                color={colors.primary} 
                onChange={(color) => handleColorChange(color, 'primary')} 
                style={{ width: '100%', height: '120px' }}
              />
            </div>
            <div className="mt-1 text-xs text-white/60 text-center">{colors.primary}</div>
          </div>

          {/* Secondary Color */}
          <div className="mb-4">
            <label className="block text-sm text-white/80 mb-2">Secondary Color</label>
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-full border border-white/20" 
                style={{ backgroundColor: colors.secondary }}
              />
              <HexColorPicker 
                color={colors.secondary} 
                onChange={(color) => handleColorChange(color, 'secondary')} 
                style={{ width: '100%', height: '120px' }}
              />
            </div>
            <div className="mt-1 text-xs text-white/60 text-center">{colors.secondary}</div>
          </div>

          {/* Background Color */}
          <div className="mb-2">
            <label className="block text-sm text-white/80 mb-2">Background Color</label>
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-full border border-white/20" 
                style={{ backgroundColor: colors.background }}
              />
              <HexColorPicker 
                color={colors.background} 
                onChange={(color) => handleColorChange(color, 'background')} 
                style={{ width: '100%', height: '120px' }}
              />
            </div>
            <div className="mt-1 text-xs text-white/60 text-center">{colors.background}</div>
          </div>

          <div className="mt-4 text-xs text-white/60 text-center">
            Changes are applied in real-time and saved automatically
          </div>
        </div>
      )}
    </>
  );
};

export default ColorPicker;
